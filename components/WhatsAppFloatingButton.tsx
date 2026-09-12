'use client';

import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Chat Card Popup */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          className="mb-3 w-72 sm:w-80 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E5DFD5] overflow-hidden text-left animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-[#1E3A2F] p-4 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-medium leading-none">NavAyam Desk</h4>
                <span className="text-[10px] text-[#A3C4B0] font-sans">Typical reply: &lt; 15 mins</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 cursor-pointer"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="p-4 bg-[#FAF8F5] text-xs text-[#252A27] font-sans space-y-2">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#ECE7DE] shadow-2xs">
              Namaste! Looking for verified residential plots or land in Indore, Bhopal, Ujjain, or Dewas? How can we assist you today?
            </div>
          </div>

          {/* Action button */}
          <div className="p-3 bg-white border-t border-[#ECE7DE]">
            <a
              href="https://wa.me/919826012480?text=Hello%20NavAyam%2C%20I%20am%20exploring%20properties%20and%20would%20like%20to%20speak%20with%20an%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-sans font-medium flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button with Pulse Indicator */}
      <button
        id="persistent-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer"
        aria-label="Contact NavAyam on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#1E3A2F] border-2 border-white rounded-full" />
        <MessageSquare className="w-6 h-6 stroke-[2.2]" />
      </button>
    </div>
  );
};
