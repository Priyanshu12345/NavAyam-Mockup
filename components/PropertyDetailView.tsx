'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import {
  MapPin,
  Maximize2,
  Compass,
  Route,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize,
  X,
  Phone,
  MessageSquare,
  Clock,
  ExternalLink,
  Share2,
  Check,
} from 'lucide-react';

interface PropertyDetailViewProps {
  property: Property;
  onBack: () => void;
  onSelectProperty?: (property: Property) => void;
}

export const PropertyDetailView: React.FC<PropertyDetailViewProps> = ({
  property,
  onBack,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Form state for Enquiry
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: 'Anytime (Morning or Evening)',
    message: `Hi, I am interested in ${property.name} (${property.location}). Please share complete layout demarcations and schedule a site visit.`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const images = property.galleryImages && property.galleryImages.length > 0
    ? property.galleryImages
    : [property.coverImage];

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div id="property-detail-page" className="pt-24 pb-24 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb & Top Controls */}
        <div className="flex items-center justify-between py-4 mb-4 border-b border-[#ECE7DE]">
          <button
            id="back-to-properties-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#1E3A2F] hover:text-[#142820] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Curated Properties</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5DFD5] bg-white text-xs font-sans text-[#575F5B] hover:text-[#181B19] cursor-pointer transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1E3A2F]" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Property Header Banner */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-3 py-0.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider ${
                  property.status === 'available'
                    ? 'bg-[#EBF1ED] text-[#1E3A2F] border border-[#A3C4B0]/40'
                    : 'bg-[#ECE7DE] text-[#575F5B]'
                }`}
              >
                {property.status === 'available' ? 'Available For Registry' : 'Sold Out'}
              </span>
              <span className="text-xs text-[#575F5B] font-sans">
                {property.type} • {property.approval}
              </span>
            </div>

            <h1
              id="property-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#181B19] tracking-tight"
            >
              {property.name}
            </h1>

            <div className="flex items-center gap-1.5 text-sm text-[#575F5B] font-sans mt-2">
              <MapPin className="w-4 h-4 text-[#4B6B58] shrink-0" />
              <span>{property.location}, {property.state}</span>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-xl border border-[#E5DFD5] text-left md:text-right">
            <span className="text-xs uppercase tracking-wider text-[#89938E] font-sans block">Offered At</span>
            <div className="font-serif text-3xl sm:text-4xl text-[#1E3A2F] font-normal">
              {property.price}
            </div>
            <span className="text-[11px] text-[#575F5B] font-sans block mt-0.5">
              Transparent, Direct Owner Pricing
            </span>
          </div>
        </div>

        {/* 1. Large Premium Image Gallery */}
        <div id="property-gallery" className="mb-12">
          {/* Main Showcase Image */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#ECE7DE] cursor-pointer group shadow-sm border border-[#E5DFD5]"
          >
            <Image
              src={images[activeImageIndex]}
              alt={`${property.name} - View ${activeImageIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

            {/* Photo count indicator */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-sans px-3.5 py-1.5 rounded-full flex items-center gap-2">
              <span className="font-medium tracking-wide">
                {activeImageIndex + 1} / {images.length} Photos
              </span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span className="text-white/80 text-[11px]">Click to expand</span>
            </div>

            {/* Fullscreen Expand Action */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Open Fullscreen Gallery"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* Gallery Navigation Arrows on Main Image */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector Strip */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 sm:w-28 aspect-[16/10] rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#1E3A2F] shadow-sm ring-2 ring-[#1E3A2F]/20'
                      : 'border-[#E5DFD5] opacity-75 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2. Key Information Bar (Icons) */}
        <div
          id="property-key-metrics"
          className="bg-[#FFFFFF] rounded-xl p-6 sm:p-8 border border-[#E5DFD5] shadow-xs mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#ECE7DE]"
        >
          {/* Plot Size */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F] shrink-0">
              <Maximize2 className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B726F] font-sans block">
                Total Plot Area
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal">
                {property.size}
              </span>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-lg bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F] shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B726F] font-sans block">
                Zoning & Type
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal">
                {property.type}
              </span>
            </div>
          </div>

          {/* Road Width */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-lg bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F] shrink-0">
              <Route className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B726F] font-sans block">
                Front Approach
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal">
                {property.roadWidth}
              </span>
            </div>
          </div>

          {/* Facing */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-12 h-12 rounded-lg bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F] shrink-0">
              <Compass className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#6B726F] font-sans block">
                Orientation
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#181B19] font-normal">
                {property.facing}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Main Split Layout: Description & Specs on Left, Enquiry Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Details, Highlights, Location */}
          <div className="lg:col-span-7 space-y-12">
            {/* About This Property */}
            <section id="about-property">
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-2">
                Overview
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-5">
                About This Property
              </h2>
              <div className="text-base text-[#575F5B] font-sans leading-relaxed space-y-4 whitespace-pre-line bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#E5DFD5]">
                {property.description}
              </div>
            </section>

            {/* Key Highlights */}
            <section id="key-highlights">
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-2">
                Verification & Infrastructure
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-5">
                Key Highlights
              </h2>
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#E5DFD5] shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EBF1ED] flex items-center justify-center text-[#1E3A2F] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#252A27] font-sans leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section id="property-specs">
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-2">
                Technical Demarcations
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-5">
                Property Specifications
              </h2>
              <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD5] overflow-hidden">
                <div className="divide-y divide-[#ECE7DE]">
                  {property.specifications.map((spec, idx) => (
                    <div key={idx} className="px-6 py-3.5 flex items-center justify-between text-sm font-sans">
                      <span className="text-[#6B726F]">{spec.label}</span>
                      <span className="text-[#181B19] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Location & Realistic Map Card */}
            <section id="property-location-section">
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-2">
                Neighborhood & Connectivity
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-5">
                Location & Accessibility
              </h2>

              <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD5] overflow-hidden p-6 sm:p-8">
                {/* Simulated Architectural Map Card */}
                <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full rounded-lg overflow-hidden bg-[#E7E0D6] border border-[#D7CFC2] mb-6 flex items-center justify-center">
                  {/* Subtle map pattern styling */}
                  <div className="absolute inset-0 bg-[#EFE9DF] opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(#1E3A2F_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

                  {/* Simulated map route lines */}
                  <svg className="absolute inset-0 w-full h-full stroke-[#4B6B58]/40 fill-none" strokeWidth="2.5">
                    <path d="M 10 150 Q 250 80, 500 130 T 900 60" />
                    <path d="M 300 10 L 300 300" strokeDasharray="4 4" strokeWidth="1.5" />
                    <path d="M 550 20 L 550 280" strokeWidth="2" stroke="#1E3A2F/50" />
                  </svg>

                  {/* Pin in center */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1E3A2F] text-white flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                      <MapPin className="w-5 h-5 text-[#FAF8F5]" />
                    </div>
                    <span className="mt-2 px-3 py-1 rounded-full bg-white/95 text-[#181B19] text-xs font-serif font-medium shadow-sm border border-[#D7CFC2]">
                      {property.name} ({property.city})
                    </span>
                  </div>

                  {/* Satellite/Standard tag */}
                  <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-xs text-[10px] font-sans px-2.5 py-1 rounded text-[#575F5B]">
                    Super Corridor Arterial Sector • Indore
                  </span>
                </div>

                {/* Nearby Landmarks List */}
                <h4 className="text-xs uppercase tracking-wider font-sans font-medium text-[#6B726F] mb-4">
                  Key Transit & Proximities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {property.nearbyLandmarks.map((landmark, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#FAF8F5] border border-[#ECE7DE] flex items-center justify-between text-xs font-sans"
                    >
                      <span className="text-[#252A27] font-medium">{landmark.name}</span>
                      <span className="text-[#1E3A2F] font-semibold">{landmark.distance}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${property.name} ${property.location} ${property.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white text-xs font-sans font-medium tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-xs text-[#6B726F] font-sans">
                    GPS Coordinates: {property.coordinates?.lat.toFixed(4)}° N, {property.coordinates?.lng.toFixed(4)}° E
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Prominent Enquiry Panel (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div
              id="property-enquiry-card"
              className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4B6B58] font-sans font-semibold mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Dedicated Property Advisor</span>
              </div>

              <h3 className="font-serif text-2xl text-[#181B19] font-normal mb-1">
                I&apos;m Interested
              </h3>
              <p className="text-xs sm:text-sm text-[#575F5B] font-sans leading-relaxed mb-6">
                Share your details and our team will get in touch with you.
              </p>

              {isSubmitted ? (
                /* Success feedback */
                <div className="bg-[#EBF1ED] border border-[#A3C4B0] rounded-xl p-6 text-center my-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A2F] text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-[#181B19] font-medium mb-1">
                    Enquiry Received
                  </h4>
                  <p className="text-xs text-[#4B6B58] font-sans leading-relaxed mb-4">
                    Thank you, {formState.fullName || 'Valued Client'}. Our senior property advisor will reach out to you within 2 hours with the verified title documents.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#1E3A2F] font-semibold hover:underline cursor-pointer"
                  >
                    Send another enquiry or query
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans text-[#4B534E] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans text-[#4B534E] font-medium mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98260 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans text-[#4B534E] font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#4B534E] font-medium mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      value={formState.preferredTime}
                      onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
                    >
                      <option>Morning (9:00 AM – 12:00 PM)</option>
                      <option>Afternoon (12:00 PM – 4:00 PM)</option>
                      <option>Evening (4:00 PM – 8:00 PM)</option>
                      <option>Weekend Site Visit Requested</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#4B534E] font-medium mb-1">
                      Message / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white font-sans font-medium text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Details...</span>
                    ) : (
                      <span>Submit Enquiry</span>
                    )}
                  </button>
                </form>
              )}

              {/* Alternative Quick Contact Channels */}
              <div className="pt-6 mt-6 border-t border-[#ECE7DE] space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-[#89938E] font-sans block text-center">
                  Or Connect Directly With Advisor
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919826012480?text=Hello%20NavAyam%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                      property.name
                    )}%20(${encodeURIComponent(property.location)})%20priced%20at%20${encodeURIComponent(
                      property.price
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl border border-[#25D366] text-[#1E3A2F] hover:bg-[#25D366]/10 text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919826012480"
                    className="py-2.5 px-3 rounded-xl border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#EBF1ED] text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1E3A2F]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fullscreen Image Lightbox Modal */}
      {isLightboxOpen && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg">{property.name}</span>
              <span className="text-sm text-white/60">
                ({activeImageIndex + 1} of {images.length})
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
              <Image
                src={images[activeImageIndex]}
                alt={`${property.name} Fullscreen`}
                fill
                sizes="100vw"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Thumbnails Footer */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-12 rounded overflow-hidden cursor-pointer border-2 transition-all ${
                  activeImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-50'
                }`}
              >
                <Image src={img} alt="Thumb" fill sizes="64px" className="object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 5. Mobile Sticky Bottom Action Bar for Easy Access */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#ECE7DE] p-3.5 z-40 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-[10px] text-[#6B726F] block">Starting at</span>
          <span className="font-serif text-lg font-medium text-[#1E3A2F]">{property.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+919826012480"
            className="p-2.5 rounded-full border border-[#1E3A2F] text-[#1E3A2F]"
            aria-label="Call NavAyam Advisor"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('property-enquiry-card');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-full bg-[#1E3A2F] text-white text-xs font-sans font-medium"
          >
            I&apos;m Interested
          </button>
        </div>
      </div>
    </div>
  );
};
