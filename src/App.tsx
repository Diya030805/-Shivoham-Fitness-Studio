/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ConceptNoticeBanner } from './components/ConceptNoticeBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { MembershipSection } from './components/MembershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { AuditModal } from './components/AuditModal';
import { ImageLightbox } from './components/ImageLightbox';
import { Phone, ArrowUp } from 'lucide-react';
import { STUDIO_DATA } from './data/studioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPreset, setEnquiryPreset] = useState<string | undefined>();
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    rawUrl?: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    rawUrl: undefined,
    title: '',
    caption: '',
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'training', 'facilities', 'membership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleOpenEnquiry = (preset?: string) => {
    setEnquiryPreset(preset);
    setIsEnquiryOpen(true);
  };

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string, rawUrl?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      rawUrl,
      title,
      caption,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#E53935] selection:text-white">
      {/* Design Review Notification Banner */}
      <ConceptNoticeBanner onOpenAudit={() => setIsAuditOpen(true)} />

      {/* Sticky 3-Zone Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <div id="home">
          <Hero
            onExploreTraining={() => handleNavigate('training')}
            onOpenEnquiry={() => handleOpenEnquiry('General Studio Enquiry')}
            onOpenLightbox={handleOpenLightbox}
          />
        </div>

        {/* Section 2: Trust & Verified Details */}
        <TrustBar />

        {/* Section 3: About Shivoham Fitness Studio */}
        <AboutSection
          onExploreFacilities={() => handleNavigate('facilities')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 4: Training Programs */}
        <TrainingSection
          onOpenEnquiry={(prog) => handleOpenEnquiry(prog)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 5: Facilities & Equipment Gallery */}
        <FacilitiesSection
          onOpenEnquiry={(facility) => handleOpenEnquiry(`Facility: ${facility}`)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 6: Membership Concept & Lead Capture Form */}
        <MembershipSection onOpenEnquiryModal={(plan) => handleOpenEnquiry(plan)} />

        {/* Section 7: Location & Contact */}
        <ContactSection />
      </main>

      {/* Persistent Mobile Quick-Action Strip */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 flex items-center gap-2">
        <a
          href={STUDIO_DATA.contact.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1A1A1A] border border-neutral-700 rounded text-xs font-semibold text-white active:bg-neutral-800"
        >
          <Phone className="w-3.5 h-3.5 text-[#E53935]" />
          <span>Call 083360 57826</span>
        </a>

        <button
          onClick={() => handleOpenEnquiry('Mobile Quick Enquiry')}
          className="flex-1 py-2.5 px-3 bg-[#E53935] hover:bg-[#D32F2F] rounded text-xs font-semibold text-white active:scale-[0.98] transition-all cursor-pointer shadow-md"
        >
          Enquire Now
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiry('General Enquiry')}
      />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        presetInterest={enquiryPreset}
      />

      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        onOpenLightbox={handleOpenLightbox}
      />

      <ImageLightbox
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.imageUrl}
        rawUrl={lightboxState.rawUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
