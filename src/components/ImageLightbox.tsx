import React, { useState } from 'react';
import { X, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  rawUrl?: string;
  title: string;
  caption: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  rawUrl,
  title,
  caption,
}) => {
  const [showRaw, setShowRaw] = useState(false);

  if (!isOpen || !imageUrl) return null;

  const currentDisplayUrl = showRaw && rawUrl ? rawUrl : imageUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white bg-black/60 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Quality indicator / Compare Button */}
        {rawUrl && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1 bg-black/80 backdrop-blur-md rounded border border-neutral-700/80 text-xs">
            <button
              onClick={() => setShowRaw(false)}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                !showRaw
                  ? 'bg-[#E53935] text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Enhanced High-Res</span>
            </button>
            <button
              onClick={() => setShowRaw(true)}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                showRaw
                  ? 'bg-neutral-700 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Original Upload</span>
            </button>
          </div>
        )}

        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={currentDisplayUrl}
            alt={title}
            className="w-full h-full object-contain transition-all duration-200"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-4 sm:p-6 bg-[#171717] border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic Gym Photograph · Naturally Enhanced</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              {caption}
            </p>
          </div>

          <div className="text-[11px] text-neutral-400 font-mono shrink-0 sm:text-right">
            <div>Location: 18/2 Kalikapur, Kolkata</div>
            <div className="text-neutral-500 mt-0.5">
              {!showRaw ? 'Clarity: Enhanced 1200px' : 'Original Raw 284px'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
