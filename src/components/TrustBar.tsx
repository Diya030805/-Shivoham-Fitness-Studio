import React from 'react';
import { Star, MapPin, Phone, ExternalLink, Info } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const TrustBar: React.FC = () => {
  return (
    <section aria-label="Studio Verification & Location Highlights" className="bg-[#141414] border-b border-neutral-800/80 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Trust Rating Notice */}
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded bg-[#1C1C1C] border border-neutral-800 text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white font-mono tabular-nums">
                  {STUDIO_DATA.rating.score} / 5.0
                </span>
                <span className="text-xs text-neutral-400">
                  based on {STUDIO_DATA.rating.reviewCount} Google Maps reviews
                </span>
              </div>
              <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Supplied for this demo concept · Please verify with live Google listing before launch.</span>
              </p>
            </div>
          </div>

          {/* Quick Location & Direct Dial */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E53935] shrink-0" />
              <span>18/2, Kalikapur, Santoshpur, Kolkata 700075</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E53935] shrink-0" />
              <a
                href={STUDIO_DATA.contact.phoneTel}
                className="font-mono tabular-nums text-white hover:text-[#E53935] transition-colors font-medium"
              >
                {STUDIO_DATA.contact.phone}
              </a>
            </div>

            <a
              href={STUDIO_DATA.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#E53935] hover:text-white transition-colors font-medium"
            >
              <span>View Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
