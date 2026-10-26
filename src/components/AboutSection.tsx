import React from 'react';
import { ArrowRight, Compass, Dumbbell, Users, CheckCircle, ShieldAlert } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface AboutSectionProps {
  onExploreFacilities: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string, rawUrl?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreFacilities,
  onOpenLightbox,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#E53935] uppercase mb-3">
            About Shivoham Fitness Studio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-5">
            A SPACE TO WORK ON YOURSELF
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Located at 18/2, Kalikapur, Santoshpur, Kolkata, Shivoham Fitness Studio is a neighborhood fitness center established to support strength, conditioning, and sustainable workout habits for everyday fitness enthusiasts.
          </p>
        </div>

        {/* 2-Column Photo & Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Visual Showcase: Real Studio Photos */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onClick={() =>
                onOpenLightbox(
                  STUDIO_DATA.photos.muralArt.url,
                  STUDIO_DATA.photos.muralArt.title,
                  STUDIO_DATA.photos.muralArt.caption,
                  STUDIO_DATA.photos.muralArt.rawUrl
                )
              }
              className="relative rounded-lg overflow-hidden border border-neutral-800 group cursor-pointer aspect-[16/10] bg-neutral-900"
            >
              <img
                src={STUDIO_DATA.photos.muralArt.url}
                alt="Shivoham Fitness Studio Warrior Mural Wall Art in Kolkata"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-medium">{STUDIO_DATA.photos.muralArt.title}</p>
                  <p className="text-neutral-400 text-[11px]">{STUDIO_DATA.photos.muralArt.caption}</p>
                </div>
                <span className="text-[11px] px-2 py-1 bg-black/60 rounded border border-neutral-700 text-neutral-300">
                  Click to inspect
                </span>
              </div>
            </div>

            {/* Verification Note for Imagery */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 px-1">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Genuine photograph taken inside Shivoham Fitness Studio at Santoshpur, Kolkata.
              </span>
            </div>
          </div>

          {/* Factual Information & Editable Philosophy Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-[#141414] border border-neutral-800">
              <div className="flex items-center gap-2 text-[#E53935] text-xs font-semibold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Verified Studio Location</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Santoshpur & Kalikapur Hub
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Situated in South Kolkata (Pincode 700075), the studio provides a dedicated local space equipped for weight resistance, dumbbell exercises, and cardio conditioning.
              </p>
              <div className="text-xs text-neutral-400 border-t border-neutral-800 pt-3">
                <span className="text-neutral-500">Address:</span> 18/2, Kalikapur, Santoshpur, Kolkata, WB 700075
              </div>
            </div>

            {/* Editable Sections Pending Business Confirmation */}
            <div className="p-6 rounded-lg bg-[#141414] border border-neutral-800 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Studio Philosophy & Approach
                </span>
                <span className="text-[10px] text-amber-400 font-medium bg-amber-950/40 border border-amber-800/60 px-2 py-0.5 rounded">
                  Pending Studio Confirmation
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                [Placeholder for the studio&apos;s guiding philosophy]: A non-intimidating training environment focusing on consistency, safe technique, and progressive physical capability rather than quick fixes.
              </p>
              <p className="text-xs text-neutral-400 italic">
                *Note for business review: The owner or management can replace this section with their verified mission statement, training philosophy, or background story.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreFacilities}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] px-6 py-3 rounded transition-colors cursor-pointer"
              >
                <span>Explore the Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
