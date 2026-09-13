'use client';

import React, { useState, useEffect } from 'react';
import { MOCK_PROPERTIES } from '@/data/properties';
import { Property } from '@/types/property';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsStrip } from '@/components/StatsStrip';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { StorySection } from '@/components/StorySection';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { PropertiesView } from '@/components/PropertiesView';
import { PropertyDetailView } from '@/components/PropertyDetailView';
import { EnquiryModal } from '@/components/EnquiryModal';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'properties' | 'detail'>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property>(MOCK_PROPERTIES[0]); // Defaults to Rajpur Greens
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryContextTitle, setEnquiryContextTitle] = useState<string | undefined>();

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: 'home' | 'properties', sectionId?: string) => {
    if (view === 'home') {
      setCurrentView('home');
      if (sectionId) {
        setTimeout(() => {
          const elem = document.getElementById(sectionId);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      setCurrentView('properties');
    }
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('detail');
  };

  const handleOpenEnquiry = (propertyTitle?: string) => {
    setEnquiryContextTitle(propertyTitle);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1E1D]">
      {/* Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div id="home-view" className="animate-in fade-in duration-300">
            {/* 1. Hero */}
            <Hero
              onExploreClick={() => setCurrentView('properties')}
              onTalkClick={() => handleOpenEnquiry('General Consultation')}
            />

            {/* 2. Trust / Statistics Strip */}
            <StatsStrip />

            {/* 3. Featured Properties */}
            <FeaturedProperties
              properties={MOCK_PROPERTIES}
              onSelectProperty={handleSelectProperty}
              onViewAllClick={() => setCurrentView('properties')}
            />

            {/* 4. Why Choose NavAyam */}
            <WhyChooseUs onLearnMore={() => handleNavigate('home', 'story')} />

            {/* 5. Featured Project / Story Section */}
            <StorySection onExploreProjects={() => setCurrentView('properties')} />

            {/* 6. How It Works */}
            <HowItWorks
              onStartExplore={() => setCurrentView('properties')}
              onStartEnquiry={() => handleOpenEnquiry('How It Works Advisory')}
            />

            {/* 7. Customer Testimonials */}
            <Testimonials />

            {/* 8. Enquiry CTA (Dark striking section) */}
            <div id="contact">
              <CtaSection onInterestedClick={() => handleOpenEnquiry('Homepage CTA')} />
            </div>
          </div>
        )}

        {currentView === 'properties' && (
          <div id="catalog-view" className="animate-in fade-in duration-300">
            <PropertiesView
              properties={MOCK_PROPERTIES}
              onSelectProperty={handleSelectProperty}
              onBackToHome={() => setCurrentView('home')}
            />
          </div>
        )}

        {currentView === 'detail' && selectedProperty && (
          <div id="detail-view" className="animate-in fade-in duration-300">
            <PropertyDetailView
              property={selectedProperty}
              onBack={() => setCurrentView('properties')}
              onSelectProperty={handleSelectProperty}
            />
          </div>
        )}
      </main>

      {/* 9. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry('Footer Request')}
      />

      {/* Floating Persistent WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Global Interactive Advisory Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        propertyTitle={enquiryContextTitle}
      />
    </div>
  );
}
