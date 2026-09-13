'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Property } from '@/types/property';
import { PropertyCard } from './PropertyCard';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onViewAllClick: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  onViewAllClick,
}) => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [properties]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.8, 380);
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="featured-properties-section" className="py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerInView ? 'in-view' : ''} flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1E3A2F]" />
              <span>Curated Showroom</span>
            </div>
            <h2
              id="featured-properties-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181B19] tracking-tight"
            >
              Featured Properties
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
              Explore our hand-picked property opportunities with verified titles and transparent pricing.
            </p>
          </div>

          {/* Controls: Carousel Arrows & View All */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous properties"
                className="w-10 h-10 rounded-full border border-[#D5CEC4] flex items-center justify-center text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] hover:border-[#1E3A2F] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next properties"
                className="w-10 h-10 rounded-full border border-[#D5CEC4] flex items-center justify-center text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] hover:border-[#1E3A2F] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              id="view-all-properties-top-btn"
              onClick={onViewAllClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] transition-all duration-200 text-xs font-sans font-medium tracking-wide cursor-pointer group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Track */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 snap-x snap-mandatory"
          >
            {properties.map((prop) => (
              <div
                key={prop.id}
                className="w-[290px] sm:w-[340px] md:w-[370px] shrink-0 snap-start"
              >
                <PropertyCard
                  property={prop}
                  onSelect={onSelectProperty}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <button
            id="view-all-properties-mobile-btn"
            onClick={onViewAllClick}
            className="w-full py-3 rounded-full border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] transition-all duration-200 text-sm font-sans font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View All Properties ({properties.length} Plots)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
