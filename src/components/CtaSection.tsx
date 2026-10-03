"use client";

import React, { useState } from "react";
import { Phone, Calendar, ArrowRight, Activity, Clock } from "lucide-react";
import { siteData } from "@/data/site";
import AppointmentModal from "./AppointmentModal";

export default function CtaSection() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#075486] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Coral 48px rule above heading */}
          <div className="w-12 h-1 bg-[#D94A32] mb-6" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
            Your Next Step Starts Here.
          </h2>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-2xl">
            Speak with our medical team and schedule a specialist consultation with our senior Orthopaedic and Urology surgeons in Chintamani.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setAppointmentModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#075486] font-semibold text-sm sm:text-base transition-all shadow-md group"
            >
              <Calendar className="w-4 h-4 text-[#075486]" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#075486] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${siteData.contact.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-all"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Reception ({siteData.contact.phone})</span>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-white/75 font-light">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#9BE8D2]" /> OPD: 10:30 AM – 3:00 PM & 5:30 PM – 8:30 PM
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#F4A5C8]" /> 24/7 Emergency Casualty: {siteData.contact.emergency}
            </span>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </section>
  );
}
