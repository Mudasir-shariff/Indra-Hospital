import React from "react";
import { MapPin, Phone, Mail, Clock, Activity, Navigation, ArrowUpRight } from "lucide-react";
import { siteData } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
            <span className="w-6 h-0.5 bg-[#C03A21]" />
            Location & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
            We're Here to Help You
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 font-light">
            Conveniently situated in the heart of Chintamani with comprehensive OPD consultations and 24/7 trauma emergency care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Contact Rows */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-soft divide-y divide-line">
            
            {/* Address */}
            <div className="pb-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Hospital Address
                  </span>
                  <p className="text-sm font-semibold text-charcoal leading-snug">
                    {siteData.name} — {siteData.descriptor}
                  </p>
                  <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                    {siteData.contact.address}, {siteData.contact.city} – {siteData.contact.pincode}, {siteData.contact.state}
                  </p>
                  <a
                    href={siteData.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0068B0] hover:text-[#075486] mt-2 group"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Emergency */}
            <div className="py-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Direct Telephones
                  </span>
                  <div className="text-sm font-semibold text-charcoal">
                    Reception: <a href={`tel:${siteData.contact.phone}`} className="text-[#0068B0] hover:underline">{siteData.contact.phone}</a>
                  </div>
                  <div className="text-sm font-semibold text-[#C03A21] mt-1">
                    24/7 Casualty: <a href={`tel:${siteData.contact.emergency}`} className="hover:underline">{siteData.contact.emergency}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* OPD Timings */}
            <div className="py-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    OPD Consultation Hours
                  </span>
                  <div className="space-y-1 text-xs sm:text-sm text-charcoal font-medium">
                    <div>• <strong>Orthopaedic OPD:</strong> 10:30 AM – 3:00 PM & 5:30 PM – 8:30 PM</div>
                    <div>• <strong>Urology OPD:</strong> Mon–Sat 10:30 AM – 3:00 PM | Sun 10:30 AM – 8:30 PM</div>
                    <div>• <strong>Emergency:</strong> Open 24 Hours / 7 Days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="pt-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-sm font-semibold text-[#0068B0] hover:underline"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Map & Directions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-line shadow-soft bg-slate-100 relative">
              <iframe
                title="Indira Hospital Chintamani Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.452796123984!2d78.045!3d13.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1758c5415f3cf%3A0x6bfa54687d0e408!2sChintamani%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 rounded-2xl bg-white border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-charcoal block">Location Note</span>
                <span className="text-xs text-muted">
                  Located near Municipal Park on Ram Mandir Road in N.R. Extension, Chintamani.
                </span>
              </div>
              <a
                href={siteData.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-all flex-shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" /> Get Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
