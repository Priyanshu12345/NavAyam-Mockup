'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface CtaSectionProps {
  onInterestedClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onInterestedClick }) => {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  return (
    <section
      id="cta-enquiry-strip"
      className="relative py-24 sm:py-32 bg-[#142820] text-[#FAF8F5] overflow-hidden"
    >
      {/* Background Architectural Subtle Image with Deep Forest Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
          alt="NavAyam Enquiries"
          fill
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#142820]/90 mix-blend-multiply" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

      <div
        ref={contentRef}
        className={`reveal ${contentInView ? 'in-view' : ''} relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center`}
      >
        {/* Subtle Pill */}


        {/* Heading */}
        <h2
          id="cta-enquiry-heading"
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-tight leading-[1.12]"
        >
          Found Something That <br />
          <span className="italic font-light text-[#E8EDE9]">Feels Right?</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-xl text-[#D8DFDA] font-sans font-normal max-w-2xl leading-relaxed">
          Tell us what you’re looking for and our team will get in touch.
        </p>

        {/* Conversion Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="cta-im-interested-btn"
            onClick={onInterestedClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F5] hover:bg-[#EBF1ED] text-[#142820] text-sm font-sans font-medium tracking-wide shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <span>I&apos;m Interested</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#1E3A2F]" />
          </button>

          <a
            id="cta-whatsapp-btn"
            href="https://wa.me/919826012480?text=Hello%20NavAyam%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#FAF8F5] border border-[#25D366]/40 backdrop-blur-xs text-sm font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Trust Badges below buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A8B7AF] font-sans">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#A3C4B0]" /> Direct Owner Disclosures
          </span>
          <span className="w-1 h-1 rounded-full bg-[#4B6B58]" />
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-[#A3C4B0]" /> Zero Spam Calls
          </span>
          <span className="w-1 h-1 rounded-full bg-[#4B6B58]" />
          <span>Complimentary Site Inspection Escort</span>
        </div>
      </div>
    </section>
  );
};
