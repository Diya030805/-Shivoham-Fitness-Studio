import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Send, Clock, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import { STUDIO_DATA } from '../data/studioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [sentDemo, setSentDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSentDemo(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#E53935] uppercase mb-3">
            Location & Contact
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            FIND SHIVOHAM FITNESS STUDIO
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Conveniently situated in Santoshpur, Kalikapur, Kolkata. Reach out directly by phone or visit the studio in person.
          </p>
        </div>

        {/* 2-Column Contact Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          {/* Left Column: Verified Location & Phone Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Box */}
            <div className="p-6 rounded-lg bg-[#141414] border border-neutral-800">
              <div className="flex items-center gap-2 text-[#E53935] text-xs font-semibold uppercase tracking-wider mb-2">
                <Phone className="w-4 h-4" />
                <span>Verified Direct Line</span>
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white mb-1 tabular-nums">
                {STUDIO_DATA.contact.phone}
              </div>
              <p className="text-xs text-neutral-400 mb-4">
                Listed contact number for enquiries and studio queries.
              </p>
              <a
                href={STUDIO_DATA.contact.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {STUDIO_DATA.contact.phone}</span>
              </a>
            </div>

            {/* Address Box */}
            <div className="p-6 rounded-lg bg-[#141414] border border-neutral-800">
              <div className="flex items-center gap-2 text-[#E53935] text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Studio Address</span>
              </div>
              <p className="text-base font-semibold text-white mb-1">
                {STUDIO_DATA.location.addressLine}
              </p>
              <p className="text-sm text-neutral-300 mb-4">
                {STUDIO_DATA.location.city}, {STUDIO_DATA.location.state} – {STUDIO_DATA.location.pincode}
              </p>

              <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={STUDIO_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#E53935]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Business Verification Note regarding Hours */}
            <div className="p-4 rounded-lg bg-[#141414] border border-neutral-800/80 text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-center gap-2 text-neutral-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Operating Hours:</span>
              </div>
              <p className="text-neutral-400">
                Opening hours and morning/evening slot timings are pending confirmation from Shivoham management. Please call the studio directly to confirm current hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form (Demo) */}
          <div className="lg:col-span-7 bg-[#141414] border border-neutral-800 rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">
                SEND A MESSAGE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Have a question for the studio? Submit this demo enquiry or call directly.
              </p>
            </div>

            {sentDemo ? (
              <div className="p-6 rounded-lg bg-[#111111] border border-emerald-800 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-white">
                  Demo Query Simulated
                </h4>
                <p className="text-xs text-neutral-300">
                  Thank you, <strong>{name}</strong>! On the production site, your query regarding Shivoham Fitness Studio will be dispatched to the front desk.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSentDemo(false);
                    setName('');
                    setPhone('');
                    setQuery('');
                  }}
                  className="text-xs text-[#E53935] hover:text-white underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Subir Mukherjee"
                      required
                      className="w-full bg-[#0E0E0E] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Contact Number <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 098300 12345"
                      required
                      className="w-full bg-[#0E0E0E] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-query" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    How can the studio help you?
                  </label>
                  <textarea
                    id="contact-query"
                    rows={4}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about workout timings, training guidance, or scheduling a visit..."
                    className="w-full bg-[#0E0E0E] border border-neutral-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E53935] resize-none"
                  />
                </div>

                <div className="p-3 rounded bg-[#0E0E0E] border border-neutral-800 text-[11px] text-neutral-400 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Concept interaction only. No user data is transmitted over the wire or stored in databases.
                  </span>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E53935] hover:bg-[#D32F2F] rounded transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Demo Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#141414]">
          <div className="p-4 sm:p-5 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold uppercase text-white text-base sm:text-lg">
                STUDIO LOCATION MAP
              </h3>
              <p className="text-xs text-neutral-400">
                18/2, Kalikapur, Santoshpur, Kolkata, West Bengal 700075
              </p>
            </div>
            <a
              href={STUDIO_DATA.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E53935] hover:text-white transition-colors"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative bg-neutral-900">
            <iframe
              title="Shivoham Fitness Studio Google Map"
              src={STUDIO_DATA.location.embedMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
