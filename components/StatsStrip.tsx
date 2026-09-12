'use client';

import React from 'react';
import { STATS_DATA } from '@/data/properties';
import { CheckCircle2, Building, MapPin, Award } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const icons = [Building, MapPin, Award, CheckCircle2];

  return (
    <section
      id="trust-statistics-strip"
      className="bg-[#FAF8F5] border-b border-[#ECE7DE] relative z-20 py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E2DBD1]/70">
          {STATS_DATA.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.label}
                id={`stat-item-${index}`}
                className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                  index > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2 text-[#4B6B58]">
                  <Icon className="w-4 h-4 text-[#1E3A2F]" />
                  <span className="text-xs uppercase tracking-widest text-[#6B726F] font-sans font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181B19] tracking-tight mb-1.5">
                  {item.value}
                </div>
                <p className="text-xs sm:text-sm text-[#575F5B] font-sans max-w-[240px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
