const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Installing frontend dependencies...');
execSync('npm install', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });

console.log('⚡ Building frontend assets...');
execSync('npm run build', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });

console.log('🚚 Copying build output to root /dist folder...');
const src = path.join(__dirname, 'frontend/dist');
const dest = path.join(__dirname, 'dist');

// Recursive helper to copy directory
function copyDir(srcDir, destDir) {
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  fs.mkdirSync(destDir, { recursive: true });
  
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log('✅ Frontend build copied to root /dist successfully!');
