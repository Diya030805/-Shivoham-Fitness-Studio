import React, { useState } from 'react';
import { X, Send, CheckCircle2, Info, Phone } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetInterest?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  presetInterest = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(presetInterest || 'Strength Training');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden text-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="text-[11px] font-semibold text-[#E53935] uppercase tracking-wider block mb-1">
            Shivoham Fitness Studio Enquiry
          </span>
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            START YOUR FITNESS JOURNEY
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            18/2, Kalikapur, Santoshpur, Kolkata · Phone: {STUDIO_DATA.contact.phone}
          </p>
        </div>

        {/* Demo Notice */}
        <div className="p-3 mb-5 rounded bg-[#1C1C1C] border border-neutral-700/80 text-xs text-neutral-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Concept Review:</strong> This interactive form demonstrates user submission flow. It does not transmit or store personal information.
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-xl font-bold uppercase text-white">
              Enquiry Received (Demo Mode)
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xs mx-auto">
              Thank you, <strong>{name}</strong>! For immediate real inquiries, please call the studio directly at{' '}
              <a href={STUDIO_DATA.contact.phoneTel} className="text-[#E53935] font-mono underline font-medium">
                {STUDIO_DATA.contact.phone}
              </a>.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-medium text-neutral-300 mb-1">
                Your Name <span className="text-[#E53935]">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Rahul Sen"
                className="w-full bg-[#0D0D0D] border border-neutral-700 rounded px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-xs font-medium text-neutral-300 mb-1">
                Contact Phone <span className="text-[#E53935]">*</span>
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="e.g. 083360 57826"
                className="w-full bg-[#0D0D0D] border border-neutral-700 rounded px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
              />
            </div>

            <div>
              <label htmlFor="modal-interest" className="block text-xs font-medium text-neutral-300 mb-1">
                Area of Interest
              </label>
              <select
                id="modal-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E53935]"
              >
                <option value="Strength Training">Strength Training</option>
                <option value="General Fitness">General Fitness</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Fitness Guidance">Fitness Guidance</option>
                <option value="Monthly Membership">Monthly Membership</option>
                <option value="Quarterly Commitment">Quarterly Commitment</option>
                <option value="Annual Membership">Annual Membership</option>
                <option value="Studio Facility Walkthrough">Studio Facility Walkthrough</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-msg" className="block text-xs font-medium text-neutral-300 mb-1">
                Questions or Preferred Visit Time (Optional)
              </label>
              <textarea
                id="modal-msg"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any questions about workout equipment or guidance..."
                className="w-full bg-[#0D0D0D] border border-neutral-700 rounded px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href={STUDIO_DATA.contact.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#E53935]" />
                <span className="font-mono tabular-nums">{STUDIO_DATA.contact.phone}</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
