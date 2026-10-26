import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: (presetInterest?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'training', label: 'Training' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'membership', label: 'Membership' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-neutral-800 shadow-lg shadow-black/50'
          : 'bg-[#0B0B0B] border-neutral-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Shivoham Fitness Studio Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 group-hover:text-[#E53935] transition-colors">
              SHIVOHAM
              <span className="text-[#E53935] ml-1">·</span>
              <span className="text-xs sm:text-sm font-sans font-medium tracking-normal text-neutral-300 ml-1.5 uppercase">
                Fitness Studio
              </span>
            </span>
          </button>

          {/* Zone 2: Navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53935]" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={STUDIO_DATA.contact.phoneTel}
              className="hidden lg:inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white px-3 py-2 rounded border border-neutral-800 bg-[#171717] hover:border-neutral-700 transition-colors"
              title="Call Shivoham Fitness Studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#E53935]" />
              <span className="font-mono tabular-nums">{STUDIO_DATA.contact.phone}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#E53935] hover:bg-[#D32F2F] active:scale-[0.98] transition-all rounded whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-red-900/30"
            >
              Enquire Now
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded hover:bg-neutral-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#121212] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-850 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2.5">
            <a
              href={STUDIO_DATA.contact.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 text-sm text-neutral-200 bg-[#171717] border border-neutral-700 rounded font-medium"
            >
              <Phone className="w-4 h-4 text-[#E53935]" />
              <span>Call: {STUDIO_DATA.contact.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
