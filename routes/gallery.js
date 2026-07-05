const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const { protect } = require('../middleware/auth');
const axios = require('axios');

// Convert Google Drive sharing link to direct image URL
function convertDriveUrl(url) {
  if (!url) return '';
  const str = url.trim();
  if (str.includes('drive.google.com')) {
    let fileId = '';
    const idMatch = str.match(/[?&]id=([^&]+)/);
    if (idMatch) {
      fileId = idMatch[1];
    } else {
      const dMatch = str.match(/\/file\/d\/([^\/]+)/);
      if (dMatch) {
        fileId = dMatch[1];
      }
    }
    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }
  return str;
}

// Parse CSV text helper
function parseCSV(text) {
  const lines = text.split('\n');
  const result = [];
  if (lines.length === 0) return result;

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/['"]/g, ''));

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const fields = [];
    let currentField = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(currentField.trim());
        currentField = '';
      } else {
        currentField += char;
      }
    }
    fields.push(currentField.trim());

    const item = {};
    headers.forEach((header, index) => {
      let val = fields[index] || '';
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      item[header] = val.trim();
    });

    const rawUrl = item['image url'] || item.imageurl || item.src || item.url || item.image || '';
    const src = convertDriveUrl(rawUrl);

    const category = item.category || '';
    const occasion = item.occasion || '';
    const placement = item.placement || '';
    const complexity = item.complexity || '';
    const side = item.side || '';
    const rawDesignElements = item['design element'] || item.designelement || item['design elements'] || item.designelements || '';
    const status = item.status || 'APPROVED';

    if (src) {
      const designElements = rawDesignElements
        ? rawDesignElements.split(',').map(e => e.trim()).filter(Boolean)
        : [];

      result.push({
        src,
        category: category.trim(),
        occasion: occasion.trim(),
        placement: placement.trim(),
        complexity: complexity.trim(),
        side: side.trim(),
        designElements,
        status: status.toUpperCase().trim()
      });
    }
  }
  return result;
}

// @route   GET /api/gallery
// @desc    Get all gallery items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error fetching gallery' });
  }
});

// @route   POST /api/gallery
// @desc    Add a single gallery item manually
// @access  Private
router.post('/', protect, async (req, res) => {
  const { src, category, occasion, placement, complexity, side, designElements, isSpecial } = req.body;

  if (!src) {
    return res.status(400).json({ message: 'Image URL is required' });
  }

  try {
    const newItem = await Gallery.create({
      src: convertDriveUrl(src),
      category,
      occasion,
      placement,
      complexity,
      side,
      designElements: Array.isArray(designElements) ? designElements : [],
      isSpecial: !!isSpecial
    });
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error adding gallery item' });
  }
});

// @route   PUT /api/gallery/:id
// @desc    Update a gallery item
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    const { category, occasion, placement, complexity, side, designElements, isSpecial, src } = req.body;

    if (src) item.src = convertDriveUrl(src);
    if (category !== undefined) item.category = category;
    if (occasion !== undefined) item.occasion = occasion;
    if (placement !== undefined) item.placement = placement;
    if (complexity !== undefined) item.complexity = complexity;
    if (side !== undefined) item.side = side;
    if (designElements !== undefined) item.designElements = designElements;
    if (isSpecial !== undefined) item.isSpecial = !!isSpecial;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error updating gallery item' });
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete a gallery item
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    await item.deleteOne();
    res.json({ message: 'Gallery item removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error deleting gallery item' });
  }
});

// @route   POST /api/gallery/sync
// @desc    Fetch and sync designs from Google Sheet CSV
// @access  Private
router.post('/sync', protect, async (req, res) => {
  const { sheetUrl } = req.body;
  if (!sheetUrl) {
    return res.status(400).json({ message: 'Sheet CSV URL is required' });
  }

  try {
    const response = await axios.get(sheetUrl);
    const parsedItems = parseCSV(response.data);

    if (parsedItems.length === 0) {
      return res.status(400).json({ message: 'No valid designs parsed from the spreadsheet. Check columns and formatting.' });
    }

    // Keep special status flags from existing items where possible
    const existingItems = await Gallery.find();
    const existingSpecialMap = new Map();
    existingItems.forEach(item => {
      if (item.isSpecial) {
        existingSpecialMap.set(item.src, true);
      }
    });

    // Delete existing ones and load new parsed ones
    await Gallery.deleteMany({});

    const itemsToSave = parsedItems.map(item => ({
      ...item,
      isSpecial: existingSpecialMap.has(item.src)
    }));

    const inserted = await Gallery.insertMany(itemsToSave);

    res.json({
      message: `Successfully synchronized gallery! Loaded ${inserted.length} designs.`,
      count: inserted.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Sync failed: ${err.message}` });
  }
});

module.exports = router;
