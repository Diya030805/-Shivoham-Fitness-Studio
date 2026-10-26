import React from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface Props {
  onOpenAudit: () => void;
}

export const ConceptNoticeBanner: React.FC<Props> = ({ onOpenAudit }) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Review Mode Notice" className="bg-[#171717] border-b border-neutral-800 text-xs text-neutral-300 py-2.5 px-4 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#E53935] shrink-0" aria-hidden="true" />
          <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
            Website Concept for Review
          </span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="text-neutral-400">
            Prepared for Shivoham Fitness Studio, Kalikapur, Kolkata. Not an official live site.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white underline underline-offset-4 font-medium transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E53935]" />
            <span>Review Verified Facts & Placeholders</span>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-neutral-400 hover:text-white p-1 transition-colors rounded hover:bg-neutral-800"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
