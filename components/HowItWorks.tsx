'use client';

import React from 'react';
import { Search, Send, UserCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartExplore: () => void;
  onStartEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onStartExplore,
  onStartEnquiry,
}) => {
  const steps = [
    {
      step: '01',
      action: 'Explore',
      title: 'Browse Curated Properties',
      description:
        'Browse properties selected by NavAyam. Review verified legal approvals, plot dimensions, facing, and realistic neighborhood amenities without high-pressure marketing.',
      icon: Search,
      ctaLabel: 'Browse Catalogue',
      onCta: onStartExplore,
    },
    {
      step: '02',
      action: 'Enquire',
      title: 'Share Your Requirements',
      description:
        'Tell us what you’re looking for and the property you’re interested in. Share your preferred timing, budget flexibility, or specific layout preference easily.',
      icon: Send,
      ctaLabel: 'Submit Requirement',
      onCta: onStartEnquiry,
    },
    {
      step: '03',
      action: 'Connect',
      title: 'Guided Advisory & Visit',
      description:
        'Our team contacts you to understand your requirements and guide you further. We schedule a personalized site tour and assist with complete registry documentation.',
      icon: UserCheck,
      ctaLabel: 'Speak With Advisor',
      onCta: onStartEnquiry,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F5F2EC] border-b border-[#E7E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
            Simplicity & Transparency
          </div>
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181B19] tracking-tight"
          >
            A Simple 3-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
            From discovering a property to taking the next step, we keep it simple.
          </p>
        </div>

        {/* Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Subtle linking horizontal line on desktop */}
          <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-[1px] bg-[#D7CFC2] -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                id={`how-it-works-step-${item.step}`}
                className="relative z-10 bg-[#FAF8F5] rounded-xl p-8 border border-[#E5DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step pill and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-[#1E3A2F]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-widest text-[#4B6B58] font-sans font-semibold mb-1">
                    {item.action}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#575F5B] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECE7DE]">
                  <button
                    onClick={item.onCta}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#1E3A2F] hover:text-[#142820] cursor-pointer group"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
