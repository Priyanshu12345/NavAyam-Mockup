'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Compass, CheckCircle2, Trees } from 'lucide-react';

interface StorySectionProps {
  onExploreProjects: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onExploreProjects }) => {
  return (
    <section id="story" className="py-20 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Imagery Showcase Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-[#E5DFD5]">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"
                alt="NavAyam Architectural Landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142820]/60 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E5DFD5] shadow-lg">
                <div className="flex items-center justify-between text-xs font-sans text-[#181B19]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A2F]" />
                    <span className="font-semibold tracking-wide">Pristine Plotted Enclaves</span>
                  </div>
                  <span className="text-[#6B726F]">Indore & Central MP</span>
                </div>
                <p className="mt-2 text-xs text-[#575F5B] font-sans leading-relaxed">
                  Every parcel is assessed for topography, solar orientation, groundwater depth, and statutory road setbacks before being showcased.
                </p>
              </div>
            </div>

            {/* Subtle decorative geometry */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#1E3A2F]/20 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-4">
              <Trees className="w-4 h-4 text-[#1E3A2F]" />
              <span>Our Philosophy</span>
            </div>

            <h2
              id="story-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181B19] tracking-tight leading-[1.15]"
            >
              A Property Should Feel <br />
              <span className="italic text-[#1E3A2F] font-light">Like a Possibility.</span>
            </h2>

            <div className="mt-6 sm:mt-8 space-y-4 text-base text-[#575F5B] font-sans leading-relaxed">
              <p>
                Land is not merely square footage; it is the foundation where your family’s next decades unfold. Yet, traditional real estate has made acquiring land exhausting—filled with obscure legal jargon, pushy sales calls, and uncertain titles.
              </p>
              <p>
                At NavAyam, we intentionally limit our portfolio. Rather than listing hundreds of unverified plots, we hand-select a few exceptional residential locations across Madhya Pradesh where infrastructure is real, legal titles are spotless, and the surroundings foster quiet living.
              </p>
              <p>
                We walk every plot with you, answer every uncomfortable legal query with verifiable paperwork, and ensure you invest with absolute confidence.
              </p>
            </div>

            {/* Micro value props */}
            <div className="mt-8 pt-8 border-t border-[#ECE7DE] grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-sans font-medium">
                  Verified Ownership Chains
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-sans font-medium">
                  Direct Transparent Pricing
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-sans font-medium">
                  Master-Planned Layouts
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#252A27] font-sans font-medium">
                  Prompt Guided Site Visits
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                id="story-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-[#FAF8F5] text-sm font-sans font-medium tracking-wide shadow-md transition-all duration-200 cursor-pointer group"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
