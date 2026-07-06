import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingContactButtons() {
  const location = useLocation();

  // Hide the contact buttons on the admin panel pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const phone = '+916395670421';
  const whatsappMsg = encodeURIComponent('Hi MehSang, I would like to book a mehndi session.');
  const whatsappUrl = `https://wa.me/916395670421?text=${whatsappMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* Call Button */}
      <a
        href={`tel:${phone}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#ab1a45] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#8f1236] active:scale-95"
        title="Call Us"
        aria-label="Call MehSang"
      >
        <FaPhoneAlt className="h-6 w-6 animate-pulse" />
        
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 scale-75 rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap shadow-md">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95"
        title="WhatsApp Chat"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Glow */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/40 opacity-75 duration-1000"></span>
        <FaWhatsapp className="relative h-8 w-8" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 scale-75 rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap shadow-md">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
