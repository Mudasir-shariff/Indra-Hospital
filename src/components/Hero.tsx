"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

export default function Hero() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState("Personalized");

  return (
    <section className="relative px-3 sm:px-6 pt-20 sm:pt-24 pb-6 max-w-[1400px] mx-auto">
      {/* Outer Hero Card with rounded corners matching MedixWeb reference */}
      <div className="relative w-full min-h-[640px] md:min-h-[720px] lg:min-h-[820px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between">
        
        {/* Background Image: Official Indira Hospital Building */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/indira-hospital-building.jpg"
            alt="INDIRA HOSPITAL — Super Speciality & Multispeciality Hospital Building, Chintamani"
            fill
            priority
            className="object-cover object-[center_35%] lg:object-[center_28%]"
          />
        </div>

        {/* Readability Scrim (Gradient Overlay) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A2F4A]/95 via-[#0A2F4A]/70 md:via-[#0A2F4A]/50 to-transparent pointer-events-none" />

        {/* Top Spacer for floating navbar */}
        <div className="relative z-20 pt-6 px-6 sm:px-12" />

        {/* Main Content Area */}
        <div className="relative z-20 px-6 sm:px-12 md:px-16 pt-8 pb-12 flex-1 flex flex-col justify-between">
          
          {/* Top-Left: Social Proof & Main Headline */}
          <div className="max-w-2xl">
            {/* Social Proof Avatar Cluster with Hospital Logo */}
            <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white">
              <div className="flex -space-x-1.5 items-center">
                <div className="relative w-7 h-7 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm flex-shrink-0">
                  <Image
                    src="/brand/indira-logo.jpg"
                    alt="Indira Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-[#0068B0]">
                  30+
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-red-100 flex items-center justify-center text-[10px] font-bold text-[#C03A21]">
                  24/7
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/95">
                Serving Chintamani & beyond since 1998
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
              Your Trusted <br />
              Partner in Modern <br />
              Healthcare
            </h1>

            {/* Sub-headline / Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* White Pill Explore Services Button with arrow circle */}
              <Link
                href="/specialities/orthopaedics"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white hover:bg-slate-100 text-charcoal font-semibold text-sm sm:text-base transition-all shadow-md group"
              >
                <span>Explore Services</span>
                <div className="w-9 h-9 rounded-full bg-[#0068B0] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>

              {/* Secondary Book Appointment Pill */}
              <button
                onClick={() => setAppointmentModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-medium text-sm sm:text-base transition-all"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Comprehensive Care Card + Stats & Tags Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4">
            
            {/* Bottom-Left: "Comprehensive Care" info block */}
            <div className="lg:col-span-5 max-w-md">
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 flex items-center gap-2">
                  <span>Comprehensive Care</span>
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
                  Accessible, modern superspeciality medical care — where advanced modular surgical technology meets clinical compassion. Book consultations, access 24/7 casualty trauma care, and regain active pain-free mobility.
                </p>
              </div>
            </div>

            {/* Bottom-Right: Two Translucent Cards matching Reference */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4 sm:justify-end">
              
              {/* Card 1: Trusted Care Rate Stats */}
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 sm:p-6 text-white sm:max-w-xs shadow-lg">
                <span className="text-xs uppercase tracking-wider text-white/80 font-semibold block mb-1">
                  Trusted Care Rate
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white mb-2">
                  97%
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                  Our patients trust us and are consistently satisfied with our surgical precision, pain relief & post-op recovery.
                </p>
              </div>

              {/* Card 2: Interactive Tags Matrix */}
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 sm:p-6 text-white sm:max-w-xs flex flex-col justify-between shadow-lg">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 text-sm">
                    ✕
                  </div>
                  <button
                    onClick={() => setActiveTag("Caring")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                      activeTag === "Caring"
                        ? "bg-white text-charcoal border-white"
                        : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                    }`}
                  >
                    Caring
                  </button>

                  <button
                    onClick={() => setActiveTag("Personalized")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                      activeTag === "Personalized"
                        ? "bg-white text-charcoal border-white shadow-sm"
                        : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                    }`}
                  >
                    Personalized
                  </button>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 text-sm">
                    ✕
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 text-sm">
                    ✕
                  </div>
                  <button
                    onClick={() => setActiveTag("Reliable")}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                      activeTag === "Reliable"
                        ? "bg-white text-charcoal border-white"
                        : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                    }`}
                  >
                    Reliable
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Slider Indicator (Reference Detail) */}
          <div className="w-full flex justify-center pt-8">
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden flex">
              <div className="w-1/3 h-full bg-white/40" />
              <div className="w-1/3 h-full bg-white rounded-full shadow" />
              <div className="w-1/3 h-full bg-white/40" />
            </div>
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
