'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '₹40L – ₹60L',
    city: 'Indore',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: propertyTitle
      ? `Hello, I'd like more verified details about ${propertyTitle}.`
      : 'Hello, I am looking for a verified residential plot in Madhya Pradesh.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="global-enquiry-modal"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5] shadow-2xl p-6 sm:p-8 my-8 text-left transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-enquiry-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B726F] hover:text-[#181B19] hover:bg-[#EAE4DC] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#1E3A2F] text-[#FAF8F5] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-2">
              We&apos;ve Received Your Request
            </h3>
            <p className="text-sm text-[#575F5B] font-sans leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, {form.name || 'Valued Buyer'}. An assigned NavAyam property advisor will reach out to you within 2 hours with verified disclosures.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#1E3A2F] text-white text-xs font-sans font-medium cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4B6B58] font-sans font-semibold mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Personal Property Advisory</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#181B19] font-normal mb-1">
              Talk to NavAyam
            </h3>
            <p className="text-xs sm:text-sm text-[#575F5B] font-sans leading-relaxed mb-6">
              Tell us what you&apos;re looking for and our team will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Priyanshu Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98260 00000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                    Preferred City
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
                  >
                    <option>Indore, MP</option>
                    <option>Bhopal, MP</option>
                    <option>Ujjain, MP</option>
                    <option>Dewas, MP</option>
                    <option>Other Central MP</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
                  >
                    <option>Under ₹35 Lakh</option>
                    <option>₹35L – ₹50L</option>
                    <option>₹50L – ₹75L</option>
                    <option>₹75 Lakh+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                    Best Time to Call
                  </label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
                  >
                    <option>Morning (9 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 8 PM)</option>
                    <option>Weekend Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-medium text-[#4B534E] mb-1">
                  Specific Requirements
                </label>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white font-sans font-medium text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center"
              >
                {isSubmitting ? 'Submitting Details...' : 'Request Personal Guidance'}
              </button>
            </form>

            <div className="pt-5 mt-5 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-[#6B726F] font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4B6B58]" />
                <span>Zero unsolicited spam</span>
              </span>
              <a
                href="https://wa.me/919826012480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A2F] hover:underline font-medium"
              >
                Direct WhatsApp →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
