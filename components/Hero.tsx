'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, ChevronDown, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  const scrollToNext = () => {
    const statsElem = document.getElementById('trust-statistics-strip');
    if (statsElem) {
      statsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#181B19]"
    >
      {/* Background Architectural Image with subtle zoom aesthetic */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="NavAyam Curated Plotted Real Estate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial gradient scrim: warm deep charcoal/forest tones for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142820]/95 via-[#181B19]/60 to-[#181B19]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#142820]/30 to-[#142820]/80" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Trust Pill */}
        <div
          id="hero-trust-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/12 backdrop-blur-md border border-[#FAF8F5]/20 text-[#FAF8F5] text-xs font-sans tracking-wider uppercase mb-6 sm:mb-8"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#A3C4B0]" />
          <span>Carefully Vetted Land & Residential Plots</span>
          <span className="w-1 h-1 rounded-full bg-[#A3C4B0]" />
          <span className="text-[#ECE7DE]/90">Madhya Pradesh</span>
        </div>

        {/* Core Headline */}
        <h1
          id="hero-headline"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF8F5] leading-[1.12] tracking-tight max-w-4xl"
        >
          Find the Right Property. <br className="hidden sm:inline" />
          <span className="italic font-light text-[#E8EDE9]">Build Your Future.</span>
        </h1>

        {/* Supporting Copy */}
        <p
          id="hero-supporting-text"
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#E4DFD7] font-sans font-normal leading-relaxed max-w-2xl px-2"
        >
          Explore carefully selected land and property opportunities at reasonable prices with NavAyam.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FAF8F5] text-[#142820] font-sans font-medium text-sm tracking-wide hover:bg-[#EBF1ED] shadow-md transition-all duration-200 cursor-pointer group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#1E3A2F]" />
          </button>

          <button
            id="hero-talk-btn"
            onClick={onTalkClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-[#FAF8F5] font-sans font-medium text-sm tracking-wide border border-[#FAF8F5]/30 backdrop-blur-xs transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#A3C4B0]" />
            <span>Talk to NavAyam</span>
          </button>
        </div>

        {/* Featured Corridor Micro-Pill */}
        <div className="mt-10 flex items-center justify-center gap-4 text-xs text-[#C5CFC8] font-sans">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#A3C4B0]" /> Indore
          </span>
          <span className="w-1 h-1 rounded-full bg-[#6B7E73]" />
          <span>Bhopal</span>
          <span className="w-1 h-1 rounded-full bg-[#6B7E73]" />
          <span>Ujjain</span>
          <span className="w-1 h-1 rounded-full bg-[#6B7E73]" />
          <span>Dewas</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#E4DFD7]/80 hover:text-[#FAF8F5] transition-colors cursor-pointer group"
        aria-label="Scroll down to statistics"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#A3C4B0]" />
      </button>
    </section>
  );
};
