import React, { useState } from 'react';
import { Check, Phone, Send, Info, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_DATA, MembershipTier } from '../data/studioData';

interface MembershipSectionProps {
  onOpenEnquiryModal: (planName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenEnquiryModal,
}) => {
  // Demo Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Monthly Membership');
  const [message, setMessage] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);
  const [formError, setFormError] = useState('');

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setFormError('Please provide your name and phone number for this demonstration.');
      return;
    }
    setFormError('');
    setSubmittedDemo(true);
  };

  const resetForm = () => {
    setSubmittedDemo(false);
    setFullName('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#111111] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#E53935] uppercase mb-3">
            Membership & Pricing Concept
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            FIND YOUR FIT
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Shivoham Fitness Studio offers flexible options suited to your routine. Official membership fees and package inclusions will be finalized by the studio management prior to launch.
          </p>
        </div>

        {/* Membership Options Grid (No Invented Prices) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STUDIO_DATA.membershipOptions.map((tier) => (
            <div
              key={tier.id}
              className="bg-[#171717] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="text-xs text-neutral-400 font-mono mb-1">{tier.duration}</div>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                  {tier.name}
                </h3>

                {/* Price Placeholder clearly indicating verification needed */}
                <div className="py-3 px-3.5 my-3 rounded bg-[#1F1F1F] border border-neutral-800">
                  <span className="text-xs font-medium text-amber-400 block">
                    {tier.status}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    No invented rates or false discounts
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                  {tier.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold uppercase text-neutral-400 tracking-wider">
                    Standard Inclusions:
                  </div>
                  {tier.placeholderFeatures.map((feat, idx) => (
                    <div key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E53935] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onOpenEnquiryModal(tier.name)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-800 hover:bg-[#E53935] rounded transition-colors text-center cursor-pointer"
                >
                  Contact for Plans & Pricing
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Start CTA Banner */}
        <div className="mb-16 rounded-xl bg-gradient-to-r from-[#171717] to-[#1F1F1F] border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
              READY TO START YOUR FITNESS JOURNEY?
            </h3>
            <p className="text-sm text-neutral-300">
              Contact the studio to learn more about available membership options and current intake schedules.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiryModal('General Membership Enquiry')}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded whitespace-nowrap shrink-0 transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
          >
            Enquire About Membership
          </button>
        </div>

        {/* Direct Membership Interactive Enquiry Form (Demonstration Only) */}
        <div className="bg-[#171717] border border-neutral-800 rounded-xl p-6 sm:p-10 max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-1">
              <span>Interactive Concept Form</span>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
              REQUEST MEMBERSHIP DETAILS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Fill out this demo form to test the lead capture workflow.
            </p>
          </div>

          {/* Explicit Concept Disclaimer */}
          <div className="p-3.5 mb-6 rounded bg-[#202020] border border-neutral-700/80 text-xs text-neutral-300 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Review Environment Notice:</strong> This interactive form is a frontend demonstration. It does not transmit, store, or log any personal data to servers.
            </div>
          </div>

          {submittedDemo ? (
            <div className="p-6 rounded-lg bg-[#141414] border border-emerald-800/60 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white">
                Demo Submission Successful
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. In the live website, your request for <strong>{selectedPlan}</strong> would be sent directly to Shivoham Studio at <strong>{STUDIO_DATA.contact.phone}</strong>.
              </p>
              <div className="text-[11px] text-neutral-400">
                (No data was saved. All fields remained in local browser state.)
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="mt-2 text-xs text-[#E53935] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Reset form and try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded bg-red-950/50 border border-red-800 text-xs text-red-200">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="member-name" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Name <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    id="member-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anirban Roy"
                    required
                    className="w-full bg-[#121212] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
                  />
                </div>

                <div>
                  <label htmlFor="member-phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Phone Number <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    id="member-phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 098765 43210"
                    required
                    className="w-full bg-[#121212] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="member-plan" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Proposed Plan of Interest
                </label>
                <select
                  id="member-plan"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                >
                  {STUDIO_DATA.membershipOptions.map((opt) => (
                    <option key={opt.id} value={opt.name}>
                      {opt.name} ({opt.duration})
                    </option>
                  ))}
                  <option value="General Enquiry">General Walk-in Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="member-message" className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Message or Specific Fitness Goals (Optional)
                </label>
                <textarea
                  id="member-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any questions about timings, guidance, or equipment..."
                  className="w-full bg-[#121212] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[11px] text-neutral-400">
                  Direct call available at{' '}
                  <a href={STUDIO_DATA.contact.phoneTel} className="text-white hover:text-[#E53935] font-mono">
                    {STUDIO_DATA.contact.phone}
                  </a>
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Demo Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
