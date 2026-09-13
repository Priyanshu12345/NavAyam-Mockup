'use client';

import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'properties', sectionId?: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer id="main-footer" className="bg-[#181B19] text-[#FAF8F5] pt-16 sm:pt-20 pb-12 border-t border-[#2A302D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2A302D]">
          {/* Brand Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#FAF8F5] flex items-center justify-center text-[#181B19]">
                <span className="font-serif font-semibold text-lg leading-none">N</span>
              </div>
              <span className="font-serif text-2xl tracking-[0.16em] uppercase font-semibold text-[#FAF8F5]">
                NavAyam
              </span>
            </div>

            <p className="text-sm text-[#A8B2AC] font-sans leading-relaxed max-w-sm mb-6">
              NavAyam is a premium property company helping customers discover carefully selected residential plots, land, and properties at reasonable and transparent prices in Dehradun and surrounding areas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#8E9B93] mb-5">
              Explore NavAyam
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate('home', 'hero')}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('properties')}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  All Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'why-navayam')}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  Why NavAyam
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'how-it-works')}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'story')}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  About Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="text-[#D8DFDA] hover:text-[#FAF8F5] hover:underline underline-offset-4 cursor-pointer"
                >
                  Contact & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="lg:col-span-5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#8E9B93] mb-5">
              Contact & Advisory Office
            </h4>

            <div className="space-y-3.5 text-sm font-sans text-[#D8DFDA]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A3C4B0] shrink-0 mt-1" />
                <span>
                  Dehradun, Uttarakhand — Address to be updated
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A3C4B0] shrink-0" />
                <a href="tel:+919826012480" className="hover:text-white transition-colors">
                  +91 98260 12480 / +91 135 270 0124
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919826012480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 98260 12480 (Direct Consultant)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A3C4B0] shrink-0" />
                <a href="mailto:advisory@navayam.in" className="hover:text-white transition-colors">
                  advisory@navayam.in
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#2A302D] flex items-center gap-3">
              <span className="text-xs text-[#8E9B93]">Primary Focus:</span>
              <span className="text-xs text-[#FAF8F5] font-medium">Dehradun & Surrounding Areas</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A857F] font-sans gap-4">
          <div>
            © 2026 NavAyam Properties. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF8F5] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
