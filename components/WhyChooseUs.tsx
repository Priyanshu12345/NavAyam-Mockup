'use client';

import React from 'react';
import { ShieldCheck, Compass, ReceiptText, Users, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onLearnMore }) => {
  const features = [
    {
      id: 'feature-verified',
      icon: ShieldCheck,
      title: 'Verified Properties',
      description:
        'Clear legal information and careful property verification. We audit 30-year revenue records, boundary coordinates, and municipal master-plan approvals before recommending any plot.',
      badge: 'Zero Legal Ambiguity',
    },
    {
      id: 'feature-locations',
      icon: Compass,
      title: 'Prime Locations',
      description:
        'Properties selected with accessibility and future growth potential in mind. Every project sits within high-momentum residential corridors close to upcoming infrastructure and transit.',
      badge: 'Strategic Growth Arcs',
    },
    {
      id: 'feature-pricing',
      icon: ReceiptText,
      title: 'Transparent Pricing',
      description:
        'Straightforward property information without unnecessary confusion or inflated broker commissions. What you see is what you pay, with complete clarity on registry charges.',
      badge: 'Fair & Direct',
    },
    {
      id: 'feature-assistance',
      icon: Users,
      title: 'Personal Assistance',
      description:
        'Real, knowledgeable property advisors available to understand your family requirements and guide you personally through site inspections, paperwork, and registry completion.',
      badge: 'End-to-End Escort',
    },
  ];

  return (
    <section id="why-navayam" className="py-20 sm:py-28 bg-[#F5F2EC] border-y border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
            The NavAyam Distinction
          </div>
          <h2
            id="why-navayam-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181B19] tracking-tight leading-[1.15]"
          >
            More Than Just Properties. <br />
            <span className="italic font-light text-[#2A4D3F]">A Better Way to Find Your Place.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
            We built NavAyam to eliminate the clutter, opaque pricing, and misleading claims common to the real estate market. We curate each plot as if we were purchasing it for our own families.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#FAF8F5] rounded-xl p-7 border border-[#E5DFD5] hover:border-[#1E3A2F]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#EBF1ED] group-hover:bg-[#1E3A2F] flex items-center justify-center text-[#1E3A2F] group-hover:text-[#FAF8F5] transition-colors duration-300 mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-sans font-medium text-[#6B726F] block mb-1">
                    0{idx + 1} • {item.badge}
                  </span>

                  <h3 className="font-serif text-xl text-[#181B19] font-normal mb-3 group-hover:text-[#1E3A2F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#575F5B] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-[#6B726F] font-sans">
                  <span>Guaranteed Standards</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B6B58]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
