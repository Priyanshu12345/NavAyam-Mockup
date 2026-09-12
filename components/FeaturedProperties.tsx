'use client';

import React from 'react';
import { Property } from '@/types/property';
import { PropertyCard } from './PropertyCard';
import { ArrowRight, Sparkles } from 'lucide-react';

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
  // Select first 4 featured properties
  const featured = properties.slice(0, 4);

  return (
    <section id="featured-properties-section" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
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
              Explore some of our carefully selected property opportunities.
            </p>
          </div>

          <button
            id="view-all-properties-top-btn"
            onClick={onViewAllClick}
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] transition-all duration-200 text-xs font-sans font-medium tracking-wide cursor-pointer group"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Featured Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featured.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onSelect={onSelectProperty}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <button
            id="view-all-properties-mobile-btn"
            onClick={onViewAllClick}
            className="w-full py-3.5 rounded-full border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] transition-all duration-200 text-sm font-sans font-medium flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View All Properties (8 Curated Plots)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
