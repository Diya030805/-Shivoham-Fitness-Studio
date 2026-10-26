import React from 'react';
import { Maximize2, ShieldCheck, ArrowRight, Camera } from 'lucide-react';
import { STUDIO_DATA, FacilityItem } from '../data/studioData';

interface FacilitiesSectionProps {
  onOpenEnquiry: (facilityName: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string, rawUrl?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onOpenEnquiry,
  onOpenLightbox,
}) => {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-[#E53935] uppercase mb-3">
              Studio Environment
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              FACILITIES & EQUIPMENT
            </h2>
            <p className="text-base text-neutral-300">
              Photographed directly on-site at Shivoham Fitness Studio in Santoshpur, Kolkata. Explore the functional equipment, lifting bays, and workout atmosphere.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-[#171717] px-3.5 py-2 rounded border border-neutral-800 shrink-0">
            <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>4 On-Site Photographs Verified</span>
          </div>
        </div>

        {/* Asymmetric 4-Card Facility Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_DATA.facilities.map((facility, index) => (
            <div
              key={facility.id}
              className="group bg-[#141414] border border-neutral-800 rounded-lg overflow-hidden flex flex-col hover:border-neutral-700 transition-all"
            >
              {/* Media Header */}
              <div
                onClick={() =>
                  onOpenLightbox(
                    facility.image,
                    facility.title,
                    facility.description,
                    facility.rawImage
                  )
                }
                className="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 text-[11px] font-medium text-emerald-300 bg-black/75 px-2.5 py-1 rounded border border-emerald-800/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Photo</span>
                </div>

                <div className="absolute bottom-3 right-3 p-1.5 rounded bg-black/60 text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2 group-hover:text-[#E53935] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">
                    Location: 18/2 Kalikapur
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(facility.title)}
                    className="inline-flex items-center gap-1 font-semibold text-white hover:text-[#E53935] transition-colors cursor-pointer"
                  >
                    <span>Enquire About Facilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Amenities Notice */}
        <div className="mt-10 p-5 rounded-lg bg-[#141414] border border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>
            <strong className="text-white">Note for Business:</strong> Other amenities such as locker facilities, washrooms, changing spaces, and water stations can be documented here once verified by management.
          </p>
          <button
            onClick={() => onOpenEnquiry('General Facilities Walkthrough')}
            className="text-white hover:text-[#E53935] underline underline-offset-4 shrink-0 font-medium cursor-pointer"
          >
            Request Studio Tour
          </button>
        </div>
      </div>
    </section>
  );
};
