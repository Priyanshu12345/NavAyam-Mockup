'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'properties' | 'detail';
  onNavigate: (view: 'home' | 'properties', sectionId?: string) => void;
  onOpenEnquiry: (propertyTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);
    // Scroll progress: percentage of page scrolled
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const [activeLink, setActiveLink] = useState<string>('Home');

  // Sync activeLink with currentView when switching between properties, detail, or home
  useEffect(() => {
    if (currentView === 'properties') {
      setActiveLink('Properties');
    } else if (currentView === 'detail') {
      setActiveLink('');
    }
  }, [currentView]);

  const navLinks = [
    { label: 'Home', action: () => onNavigate('home', 'hero') },
    { label: 'Properties', action: () => onNavigate('properties') },
    { label: 'Why NavAyam', action: () => onNavigate('home', 'why-navayam') },
    { label: 'How It Works', action: () => onNavigate('home', 'how-it-works') },
    { label: 'About', action: () => onNavigate('home', 'story') },
    { label: 'Contact', action: () => onNavigate('home', 'contact') },
  ];

  const handleLinkClick = (action: () => void, label: string) => {
    setActiveLink(label);
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4DC] py-3.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#1E3A2F] via-[#4B6B58] to-[#A3C4B0] transition-none pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            id="nav-brand-logo"
            onClick={() => {
              setActiveLink('Home');
              onNavigate('home');
            }}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-sm bg-[#1E3A2F] flex items-center justify-center text-[#FAF8F5] transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif font-medium text-lg leading-none tracking-tight">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] uppercase font-semibold text-[#181B19]">
                NavAyam
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#6B726F] font-sans -mt-0.5">
                Curated Properties
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive =
                activeLink === item.label &&
                (item.label === 'Properties' ? currentView === 'properties' : currentView === 'home');

              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => {
                    setActiveLink(item.label);
                    item.action();
                  }}
                  className={`text-sm font-sans tracking-wide transition-colors duration-200 cursor-pointer py-1 relative group/navlink ${
                    isActive
                      ? 'text-[#1E3A2F] font-semibold'
                      : 'text-[#4B534E] hover:text-[#181B19]'
                  }`}
                >
                  {item.label}
                  {/* Active underline */}
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E3A2F] rounded-full" />
                  ) : (
                    /* Hover underline slide-in */
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1E3A2F]/40 rounded-full scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-call-btn"
              onClick={() => onOpenEnquiry('Direct Advisory Call')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#4B534E] hover:text-[#1E3A2F] hover:bg-[#EAE4DC]/50 rounded-full transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98260 12480</span>
            </button>

            <button
              id="nav-get-in-touch-btn"
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-[#FAF8F5] text-xs font-medium tracking-wide shadow-xs transition-all duration-200 cursor-pointer hover:shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-quick-enquire-btn"
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 rounded-full bg-[#1E3A2F] text-[#FAF8F5] text-xs font-medium cursor-pointer"
            >
              Enquire
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#181B19] hover:bg-[#EAE4DC]/60 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F5] border-b border-[#EAE4DC] shadow-xl px-6 py-8 transition-all duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.action, item.label)}
                className="text-left text-lg font-serif tracking-wide py-2 text-[#181B19] border-b border-[#ECE7DE] hover:text-[#1E3A2F] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#89938E]" />
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                id="mobile-drawer-enquire-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-full bg-[#1E3A2F] text-[#FAF8F5] font-medium text-sm text-center shadow-sm cursor-pointer"
              >
                Get in Touch with NavAyam
              </button>
              
              <a
                href="https://wa.me/919826012480?text=Hello%20NavAyam%2C%20I%20would%20like%20to%20know%20more%20about%20your%20curated%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full border border-[#1E3A2F] text-[#1E3A2F] font-medium text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-[#EBF1ED]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
