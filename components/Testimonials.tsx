'use client';

import React from 'react';
import Image from 'next/image';
import { MOCK_TESTIMONIALS } from '@/data/properties';
import { Quote, MapPin, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
            Real Buyer Experiences
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181B19] tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
            Genuine experiences from homeowners and families who discovered their properties through NavAyam.
          </p>
        </div>

        {/* 3 Believable Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-[#FFFFFF] rounded-xl p-8 border border-[#E5DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#1E3A2F]/20 mb-4" />
                <p className="text-sm sm:text-base text-[#252A27] font-sans leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#ECE7DE] flex items-center gap-3.5">
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
    </section>
  );
};
