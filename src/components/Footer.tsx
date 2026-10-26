import React from 'react';
import { MapPin, Phone, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAudit: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAudit,
  onOpenEnquiry,
}) => {
  return (
    <footer className="bg-[#080808] border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display text-2xl font-bold tracking-wider text-white uppercase block">
              SHIVOHAM <span className="text-[#E53935]">·</span> FITNESS STUDIO
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              A local fitness space situated in Kalikapur, Santoshpur, Kolkata, providing structured workout environments for strength training and general conditioning.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={onOpenAudit}
                className="text-xs text-neutral-300 hover:text-white underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Fact Verification Audit</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Studio' },
                { id: 'training', label: 'Training Programs' },
                { id: 'facilities', label: 'Facilities & Equipment' },
                { id: 'membership', label: 'Membership Concept' },
                { id: 'contact', label: 'Location & Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Supplied Business Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Supplied Business Information
            </div>
            <div className="space-y-2.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                <span>{STUDIO_DATA.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E53935] shrink-0" />
                <a
                  href={STUDIO_DATA.contact.phoneTel}
                  className="font-mono tabular-nums text-white hover:text-[#E53935]"
                >
                  {STUDIO_DATA.contact.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={STUDIO_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#E53935] hover:text-white"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Google Maps: Shivoham Fitness Studio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Concept Review Notice */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Shivoham Fitness Studio. All rights reserved.
          </div>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 text-center sm:text-right">
            <span>Website concept prepared for review. Not an official website.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
