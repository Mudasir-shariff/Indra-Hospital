import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Calendar, MapPin, Award } from "lucide-react";
import { siteData } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Card & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0068B0] to-[#0A2F4A] p-8 sm:p-10 text-white shadow-xl">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[#F4A5C8]" /> Established 1998
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
                  Over 28 Years of Dedicated Healing in Chintamani
                </h3>

                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  From our humble beginnings as an ethical outpatient clinic to becoming a 30-bed premier Super Speciality Orthopaedics & Urology surgical centre, our mission has remained unchanged: clinical precision and compassionate care.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-heading text-white">1998</div>
                    <div className="text-xs text-white/70 mt-1">Founded as Clinic</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-heading text-[#9BE8D2]">2025</div>
                    <div className="text-xs text-white/70 mt-1">Super Speciality</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-heading text-[#C2EFF8]">2026</div>
                    <div className="text-xs text-white/70 mt-1">Urology Wing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick credentials strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-line shadow-soft">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0068B0] mb-1">
                  Location & Connectivity
                </div>
                <p className="text-xs sm:text-sm text-muted">
                  Near Park, N.R. Extension, Ram Mandir Road, Chintamani – 563125
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-line shadow-soft">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C03A21] mb-1">
                  Emergency Readiness
                </div>
                <p className="text-xs sm:text-sm text-muted">
                  24/7 dedicated orthopaedic & urological casualty with central oxygen
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
                <span className="w-6 h-0.5 bg-[#C03A21]" />
                About Indira Hospital
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight leading-tight">
                Care Built Around Every Step of Your Recovery
              </h2>
            </div>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                Established in 1998 as a small clinic, Indira Hospital, Chintamani has grown steadily over the years into a trusted healthcare institution, serving the community with dedication, compassion, and integrity.
              </p>
              <p>
                Driven by a vision to deliver advanced speciality care closer to home, Indira Hospital underwent a major transformation in 2025, evolving into a modern Super Speciality Healthcare Facility equipped with two advanced modular operation theatres, digital C-Arm imaging, and comprehensive fracture care.
              </p>
              <p>
                In 2026, we launched a dedicated Urology Department, expanding our specialized surgical capabilities under one roof. Today, we proudly offer evidence-based diagnostics, laser stone surgeries, and reconstructive joint procedures designed around each patient’s unique needs.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white font-medium text-sm transition-all shadow-sm group"
              >
                <span>Read Full Hospital Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line hover:bg-white text-charcoal font-medium text-sm transition-all"
              >
                Meet Our Specialists
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
