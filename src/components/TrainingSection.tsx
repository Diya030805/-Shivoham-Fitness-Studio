import React from 'react';
import { ArrowRight, AlertCircle, Dumbbell, Activity, UserCheck, HelpCircle } from 'lucide-react';
import { STUDIO_DATA, TrainingProgram } from '../data/studioData';

interface TrainingSectionProps {
  onOpenEnquiry: (programTitle: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string, rawUrl?: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onOpenEnquiry,
  onOpenLightbox,
}) => {
  return (
    <section id="training" className="py-20 lg:py-28 bg-[#111111] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-[#E53935] uppercase mb-3">
              Proposed Offerings
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              TRAINING PROGRAMS
            </h2>
            <p className="text-base text-neutral-300">
              The following categories represent common fitness offerings. All program structures and specific schedules are subject to business confirmation before public launch.
            </p>
          </div>

          <div className="shrink-0 p-3 rounded bg-[#171717] border border-amber-900/40 text-xs text-amber-300 flex items-start gap-2.5 max-w-sm">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Draft Program Modules:</strong> Structured in data files for easy updates or custom substitutions by Shivoham management.
            </span>
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_DATA.trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#171717] border border-neutral-800 rounded-lg overflow-hidden flex flex-col group hover:border-neutral-700 transition-all duration-200"
            >
              {/* Card Image */}
              <div
                onClick={() =>
                  onOpenLightbox(
                    program.image,
                    program.title,
                    `Authentic studio visual associated with ${program.title} training concept. Enhanced for clarity and fine equipment texture.`,
                    program.rawImage
                  )
                }
                className="relative aspect-[4/3] overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img
                  src={program.image}
                  alt={`${program.title} at Shivoham Fitness Studio`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-90" />
                <div className="absolute top-3 left-3 text-[11px] font-medium text-neutral-200 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-700">
                  {program.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#E53935] transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {program.shortDescription}
                  </p>

                  <div className="space-y-1.5 mb-5 border-t border-neutral-800/80 pt-3">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="text-xs text-neutral-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#E53935]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-amber-400">
                    Needs confirmation
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(program.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#E53935] transition-colors cursor-pointer group/btn"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
