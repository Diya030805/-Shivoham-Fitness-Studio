import React from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, MapPin, Phone, Star, Camera, Eye } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string, rawUrl?: string) => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  onOpenLightbox,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#141414] border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-8 overflow-y-auto text-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E53935] uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Design Concept Review Guide</span>
          </div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            FACT VERIFICATION & AUDIT CHECKLIST
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Prepared for Shivoham Fitness Studio management to audit verified information versus placeholder items requiring confirmation before publishing.
          </p>
        </div>

        {/* Section 1: Verified Information */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase text-emerald-400 flex items-center gap-1.5 tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Information (Supplied for Demo)</span>
          </h4>

          <div className="space-y-2 bg-[#191919] p-4 rounded-lg border border-neutral-800 text-xs">
            <div className="flex justify-between py-1 border-b border-neutral-800">
              <span className="text-neutral-400">Business Name:</span>
              <strong className="text-white">Shivoham Fitness Studio</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-800">
              <span className="text-neutral-400">Category:</span>
              <span className="text-white">Gym / Fitness Studio</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-800">
              <span className="text-neutral-400">Address:</span>
              <span className="text-white text-right">18/2, Kalikapur, Santoshpur, Kolkata, WB 700075</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-800">
              <span className="text-neutral-400">Phone:</span>
              <span className="text-white font-mono">{STUDIO_DATA.contact.phone}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-400">Google Rating:</span>
              <span className="text-white font-mono">4.8★ (82 reviews) — Supplied for demo</span>
            </div>
          </div>
        </div>

        {/* Section 2: Real Photographic Assets Used */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase text-emerald-400 flex items-center gap-1.5 tracking-wider">
            <Camera className="w-4 h-4" />
            <span>4 Authentic On-Site Photographs (Enhanced for High-Res Clarity)</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {Object.entries(STUDIO_DATA.photos).map(([key, photo]) => (
              <div
                key={key}
                onClick={() => onOpenLightbox(photo.url, photo.title, photo.caption, photo.rawUrl)}
                className="group relative rounded overflow-hidden aspect-square border border-neutral-700 bg-neutral-900 cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-neutral-400 italic">
            All 4 uploaded photos are authentically used across the website. Enhanced with natural sharpness, balanced contrast, and noise reduction while strictly preserving every original detail and person. Click any photo to toggle between Enhanced and Original.
          </p>
        </div>

        {/* Section 3: Placeholders Requiring Business Confirmation */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase text-amber-400 flex items-center gap-1.5 tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Content Requiring Confirmation Before Live Launch</span>
          </h4>

          <ul className="space-y-2 bg-[#191919] p-4 rounded-lg border border-neutral-800 text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span><strong>Operating Hours:</strong> Need confirmed morning and evening opening/closing times.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span><strong>Membership Pricing & Terms:</strong> Rates for monthly, quarterly, and annual passes must be confirmed by the owner (no fake prices invented).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span><strong>Trainer Certifications & Bios:</strong> Specific credentials should be reviewed before adding to personal coaching cards.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span><strong>Google Maps Live Rating:</strong> Verify live count before production publishing.</span>
            </li>
          </ul>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors cursor-pointer"
          >
            Close Audit Guide
          </button>
        </div>
      </div>
    </div>
  );
};
