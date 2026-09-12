'use client';

import React from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import { MapPin, Maximize2, Compass, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const isAvailable = property.status === 'available';

  return (
    <div
      id={`property-card-${property.id}`}
      onClick={() => onSelect(property)}
      className="group bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E5DFD5] hover:border-[#1E3A2F]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Property Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE7DE]">
        <Image
          src={property.coverImage}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wide uppercase shadow-xs backdrop-blur-md ${
              isAvailable
                ? 'bg-[#1E3A2F]/90 text-[#FAF8F5] border border-[#A3C4B0]/30'
                : 'bg-[#575F5B]/90 text-[#E7E0D6] border border-white/20'
            }`}
          >
            {isAvailable ? 'Available' : 'Sold'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-[#FAF8F5]/90 text-[#181B19] backdrop-blur-md border border-[#E5DFD5]">
            {property.type}
          </span>
        </div>

        {/* Transparent price overlay preview */}
        <div className="absolute bottom-3 right-3 bg-[#181B19]/80 backdrop-blur-md text-[#FAF8F5] px-3 py-1 rounded-md text-sm font-sans font-semibold">
          {property.price}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs text-[#575F5B] font-sans mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#4B6B58] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal leading-snug group-hover:text-[#1E3A2F] transition-colors mb-2">
            {property.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#575F5B] font-sans line-clamp-2 leading-relaxed mb-4">
            {property.shortDescription}
          </p>

          {/* Micro-Features Strip */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#ECE7DE] mb-4 text-xs text-[#252A27]">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#4B6B58]" />
              <span className="font-medium font-sans">{property.size}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#4B6B58]" />
              <span className="font-sans text-[#575F5B] truncate">{property.facing}</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2 text-[#4B6B58]">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="font-sans text-[11px] truncate text-[#4B6B58]">{property.roadWidth} • {property.approval}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#89938E] font-sans block">Offered At</span>
            <span className="font-serif text-lg sm:text-xl font-normal text-[#1E3A2F]">
              {property.price}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#1E3A2F] group-hover:text-[#142820] group-hover:underline decoration-1 underline-offset-4 transition-all">
            <span>View Property</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
