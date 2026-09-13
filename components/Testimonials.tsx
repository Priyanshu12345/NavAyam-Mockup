'use client';

import React from 'react';
import Image from 'next/image';
import { MOCK_TESTIMONIALS } from '@/data/properties';
import { Quote, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Testimonials: React.FC = () => {
  // Duplicate items for continuous marquee loop
  const marqueeItems = [...MOCK_TESTIMONIALS, ...MOCK_TESTIMONIALS];
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerInView ? 'in-view' : ''} text-center max-w-2xl mx-auto`}
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1E3A2F]" />
            <span>Real Buyer Experiences</span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181B19] tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
            Genuine experiences from homeowners and families who discovered their properties through NavAyam.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden pause-on-hover py-4">
        {/* Left and Right Subtle Gradient Fade Scrims */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />

        {/* Marquee Track (Seamless dual-track loop) */}
        <div className="w-full overflow-hidden select-none flex">
          <div className="animate-marquee flex shrink-0 items-stretch gap-6 pr-6">
            {MOCK_TESTIMONIALS.map((item) => (
              <div
                key={`track1-${item.id}`}
                id={`testimonial-card-1-${item.id}`}
                className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-[#FFFFFF] rounded-2xl p-7 sm:p-8 border border-[#E5DFD5] hover:border-[#1E3A2F]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-[#1E3A2F]/20" />
                    <span className="text-[11px] font-sans text-[#89938E] font-medium bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#ECE7DE]">
                      Verified Buyer • {item.year}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#252A27] font-sans leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#ECE7DE] flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#E2DBD1]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-base text-[#181B19] font-medium truncate">
                        {item.name}
                      </h4>
                      <CheckCircle className="w-3.5 h-3.5 text-[#4B6B58] shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#575F5B] font-sans truncate">
                      <MapPin className="w-3 h-3 text-[#4B6B58] shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-[11px] text-[#89938E] font-sans block mt-0.5 truncate">
                      Acquired {item.propertyPurchased}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-marquee flex shrink-0 items-stretch gap-6 pr-6" aria-hidden="true">
            {MOCK_TESTIMONIALS.map((item) => (
              <div
                key={`track2-${item.id}`}
                id={`testimonial-card-2-${item.id}`}
                className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-[#FFFFFF] rounded-2xl p-7 sm:p-8 border border-[#E5DFD5] hover:border-[#1E3A2F]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-[#1E3A2F]/20" />
                    <span className="text-[11px] font-sans text-[#89938E] font-medium bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#ECE7DE]">
                      Verified Buyer • {item.year}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#252A27] font-sans leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#ECE7DE] flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#E2DBD1]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-base text-[#181B19] font-medium truncate">
                        {item.name}
                      </h4>
                      <CheckCircle className="w-3.5 h-3.5 text-[#4B6B58] shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#575F5B] font-sans truncate">
                      <MapPin className="w-3 h-3 text-[#4B6B58] shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-[11px] text-[#89938E] font-sans block mt-0.5 truncate">
                      Acquired {item.propertyPurchased}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

