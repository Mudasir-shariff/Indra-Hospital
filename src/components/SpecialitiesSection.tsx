"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Bone, 
  Activity, 
  Stethoscope, 
  ShieldAlert, 
  Zap, 
  Sparkles,
  Droplets,
  Layers,
  ChevronRight
} from "lucide-react";
import { orthopaedicDepartment, urologyDepartment } from "@/data/specialities";

export default function SpecialitiesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "ortho" | "uro">("all");

  const cards = [
    {
      title: "Joint Replacement Surgery",
      dept: "Orthopaedics",
      icon: Bone,
      slug: "joint-replacement",
      href: "/specialities/joint-replacement",
      desc: "Total Knee Replacement (TKR), Total Hip Replacement (THR), and partial joint revisions for painless mobility.",
      procedures: ["Total Knee Replacement", "Total Hip Replacement", "Revision Arthroplasty"]
    },
    {
      title: "Kidney Stone Surgery",
      dept: "Urology",
      icon: Droplets,
      slug: "kidney-stones",
      href: "/specialities/kidney-stones",
      desc: "Minimally invasive laser stone fragmentation, RIRS, PCNL, and flexible ureteroscopy with quick recovery.",
      procedures: ["RIRS Laser Surgery", "PCNL & Mini-PCNL", "Cystolithotripsy"]
    },
    {
      title: "Trauma & Fracture Surgery",
      dept: "Orthopaedics",
      icon: ShieldAlert,
      slug: "trauma-fracture",
      href: "/specialities/trauma-fracture",
      desc: "Round-the-clock emergency surgical care for complex fractures, pelvic trauma, and non-union bone repair.",
      procedures: ["ORIF / CRIF Fixation", "Interlocking Nailing", "Pelvic & Acetabular"]
    },
    {
      title: "Prostate Surgery",
      dept: "Urology",
      icon: Activity,
      slug: "prostate-surgery",
      href: "/specialities/prostate-surgery",
      desc: "Advanced transurethral resection (TURP), laser enucleation (HoLEP), and comprehensive prostate care.",
      procedures: ["TURP Resection", "Laser Prostatectomy", "Bladder Neck Incision"]
    },
    {
      title: "Arthroscopic Keyhole Surgery",
      dept: "Orthopaedics",
      icon: Zap,
      slug: "arthroscopy",
      href: "/specialities/arthroscopy",
      desc: "Minimally invasive keyhole joint repair for torn ACL, PCL ligaments, meniscus tears, and shoulder labrum.",
      procedures: ["ACL Reconstruction", "Meniscus Repair", "Rotator Cuff Repair"]
    },
    {
      title: "Spine Surgery",
      dept: "Orthopaedics",
      icon: Layers,
      slug: "spine-surgery",
      href: "/specialities/spine-surgery",
      desc: "Targeted surgical solutions for herniated discs, nerve compression, spinal fusion, and pedicle screw fixation.",
      procedures: ["Microdiscectomy", "Spinal Decompression", "Spinal Fusion"]
    },
    {
      title: "Deformity Correction",
      dept: "Orthopaedics",
      icon: Sparkles,
      slug: "deformity-correction",
      href: "/specialities/orthopaedics",
      desc: "Fellowship-trained surgical alignment, osteotomy, and specialized limb lengthening for congenital and acquired conditions.",
      procedures: ["Corrective Osteotomy", "Limb Lengthening", "Realignment"]
    },
    {
      title: "Uro-Oncology & Reconstruction",
      dept: "Urology",
      icon: Stethoscope,
      slug: "uro-oncology",
      href: "/specialities/urology",
      desc: "Kidney, bladder, and prostate tumour surgical management alongside stricture urethroplasty and pyeloplasty.",
      procedures: ["TURBT Bladder Tumour", "Pyeloplasty", "Urethroplasty (BMG)"]
    }
  ];

  const filteredCards = cards.filter((c) => {
    if (activeTab === "ortho") return c.dept === "Orthopaedics";
    if (activeTab === "uro") return c.dept === "Urology";
    return true;
  });

  return (
    <section id="specialities" className="py-20 lg:py-28 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
              <span className="w-6 h-0.5 bg-[#C03A21]" />
              Super Speciality Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
              Advanced Surgical Specialities
            </h2>
            <p className="text-muted text-sm sm:text-base mt-2">
              High-precision orthopaedic and urological surgical care delivered in state-of-the-art modular operation theatres.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center bg-[#FAFAF8] p-1 rounded-xl border border-line self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-white text-[#0068B0] shadow-sm border border-line"
                  : "text-muted hover:text-charcoal"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab("ortho")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "ortho"
                  ? "bg-white text-[#0068B0] shadow-sm border border-line"
                  : "text-muted hover:text-charcoal"
              }`}
            >
              Orthopaedics
            </button>
            <button
              onClick={() => setActiveTab("uro")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "uro"
                  ? "bg-white text-[#0068B0] shadow-sm border border-line"
                  : "text-muted hover:text-charcoal"
              }`}
            >
              Urology
            </button>
          </div>
        </div>

        {/* Speciality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-[#FAFAF8] rounded-2xl p-6 sm:p-7 border border-line hover:border-[#0068B0]/40 hover:bg-white transition-all duration-200 shadow-soft hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-line text-muted">
                      {card.dept}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2 group-hover:text-[#0068B0] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-line/60">
                  <div className="space-y-1 mb-4">
                    {card.procedures.slice(0, 2).map((proc) => (
                      <div key={proc} className="text-[11px] text-muted flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#0068B0]" />
                        <span className="truncate">{proc}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068B0] group-hover:text-[#C03A21] transition-colors"
                  >
                    <span>View Procedure Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom department deep-dive cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/specialities/orthopaedics"
            className="p-6 sm:p-8 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-[#0068B0] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Full Department Overview
              </span>
              <h4 className="text-xl font-bold font-heading text-charcoal mt-1 group-hover:text-[#0068B0] transition-colors">
                Orthopaedic Surgeries & Sub-Specialities
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Explore all 9 orthopaedic surgical disciplines, fracture care & rehabilitation
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-[#0068B0] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="/specialities/urology"
            className="p-6 sm:p-8 rounded-2xl bg-[#FAFAF8] border border-line hover:border-[#0068B0] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Full Department Overview
              </span>
              <h4 className="text-xl font-bold font-heading text-charcoal mt-1 group-hover:text-[#0068B0] transition-colors">
                Urology Surgeries & Laser Stone Clinic
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Explore all 10 urological surgical specialities, RIRS laser, prostate & andrology
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center text-[#0068B0] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
