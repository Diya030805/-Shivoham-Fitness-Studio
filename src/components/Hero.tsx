import React from 'react';
import { ArrowRight, MapPin, Phone, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface HeroProps {
  onExploreTraining: () => void;
  onOpenEnquiry: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string, rawUrl?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTraining,
  onOpenEnquiry,
  onOpenLightbox,
}) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#0B0B0B] border-b border-neutral-800/80 overflow-hidden">
      {/* Background Graphic & Real Photo Integration */}
      <div className="absolute inset-0 z-0">
        <img
          src={STUDIO_DATA.photos.teamWall.url}
          alt="Shivoham Fitness Studio Team and Illuminated Wall in Kalikapur, Kolkata"
          className="w-full h-full object-cover object-center lg:object-[center_35%] filter brightness-[0.45] contrast-[1.1] scale-100"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic multi-stop gradient scrim to ensure WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow - Clean unboxed text with typographic dots */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#E53935] uppercase mb-4">
            <span>FITNESS</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>STRENGTH</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>WELLNESS</span>
          </div>

          {/* Headline - Oswald condensed display font, bold uppercase, text-wrap balance */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.98] mb-6 text-balance">
            BUILD YOUR <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              STRONGER SELF.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Your fitness journey starts with one step. Discover a fitness space designed to support your goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onExploreTraining}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] active:scale-[0.99] rounded transition-all cursor-pointer shadow-lg shadow-red-950/40"
            >
              <span>Explore Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-[#171717] hover:bg-[#202020] border border-neutral-700/80 rounded transition-all cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>

            <button
              onClick={() =>
                onOpenLightbox(
                  STUDIO_DATA.photos.teamWall.url,
                  STUDIO_DATA.photos.teamWall.title,
                  STUDIO_DATA.photos.teamWall.caption,
                  STUDIO_DATA.photos.teamWall.rawUrl
                )
              }
              className="text-xs text-neutral-400 hover:text-neutral-200 underline underline-offset-4 text-center sm:text-left self-center sm:ml-2 py-2"
            >
              View authentic studio photo
            </button>
          </div>

          {/* Trust & Location Anchors - Unboxed, clean metadata */}
          <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <div>
                <span className="font-semibold text-white font-mono tabular-nums">
                  {STUDIO_DATA.rating.score}★
                </span>{' '}
                <span>({STUDIO_DATA.rating.reviewCount} reviews)</span>
                <p className="text-[10px] text-neutral-400 leading-tight">Google Maps (Verify for launch)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E53935] shrink-0" />
              <div>
                <p className="font-medium text-white truncate">Kalikapur, Santoshpur</p>
                <p className="text-[10px] text-neutral-400">Kolkata, WB 700075</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <a
                  href={STUDIO_DATA.contact.phoneTel}
                  className="font-mono tabular-nums text-white hover:text-[#E53935] transition-colors"
                >
                  {STUDIO_DATA.contact.phone}
                </a>
                <p className="text-[10px] text-neutral-400">Direct studio line</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
