'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Trees } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface StorySectionProps {
  onExploreProjects: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onExploreProjects }) => {
  const { ref: imgRef, isInView: imgInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id="story" className="py-20 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Imagery Showcase Side */}
          <div
            ref={imgRef}
            className={`reveal reveal-left ${imgInView ? 'in-view' : ''} lg:col-span-6 relative`}
          >
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

            </div>

            {/* Subtle decorative geometry */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#1E3A2F]/20 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Editorial Content Side */}
          <div
            ref={contentRef}
            className={`reveal reveal-right ${contentInView ? 'in-view' : ''} lg:col-span-6 flex flex-col justify-center`}
          >
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
                Land is not merely square footage; it is where your family’s future takes root. In a region as naturally gifted as Dehradun, choosing the right parcel means balancing peaceful foothill surroundings, lush greenery, and clean air with practical everyday accessibility to schools, healthcare, and the city centre.
              </p>
              <p>
                At NavAyam, we choose not to overwhelm you with thousands of indiscriminate listings. Instead, we focus on a curated selection of residential opportunities across Dehradun and its prime corridors—ensuring clear demarcations, well-connected access roads, and communities that offer a genuinely balanced lifestyle.
              </p>
              <p>
                We guide you through each location personally, providing transparent information and honest local insights so you can discover a property that truly fits your needs.
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
