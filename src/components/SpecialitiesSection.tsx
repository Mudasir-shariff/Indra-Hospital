"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Bone, 
  Droplets, 
  Stethoscope, 
  Activity, 
  Sparkles, 
  Heart, 
  ShieldAlert, 
  Layers, 
  Zap,
  Clock,
  CalendarCheck,
  Calendar,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { allHospitalSpecialities } from "@/data/specialities";
import AppointmentModal from "./AppointmentModal";

export default function SpecialitiesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "daily-opd" | "appointment" | "super" | "multi">("all");
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("Orthopaedics");

  // Icon resolver map
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bone": return Bone;
      case "Droplets": return Droplets;
      case "Stethoscope": return Stethoscope;
      case "Activity": return Activity;
      case "Sparkles": return Sparkles;
      case "Heart": return Heart;
      case "ShieldAlert": return ShieldAlert;
      case "Layers": return Layers;
      case "Zap": return Zap;
      default: return Stethoscope;
    }
  };

  const filteredSpecialities = allHospitalSpecialities.filter((item) => {
    if (activeTab === "daily-opd") return item.opdType === "Daily OPD";
    if (activeTab === "appointment") return item.opdType === "Appointment Basis";
    if (activeTab === "super") return item.category === "Super Speciality";
    if (activeTab === "multi") return item.category === "Multispeciality";
    return true;
  });

  const handleOpenAppointment = (deptName: string) => {
    setSelectedDept(deptName);
    setAppointmentModalOpen(true);
  };

  return (
    <section id="specialities" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#0068B0] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C03A21]" />
            INDIRA HOSPITAL • SUPER SPECIALITY & MULTISPECIALITY HOSPITAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
            Our Medical & Surgical Specialities
          </h2>
          <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed">
            Providing comprehensive healthcare in Chintamani with <strong>Daily OPD</strong> for key clinical departments and dedicated superspecialist consultations <strong>Available on Appointment Basis</strong>.
          </p>
        </div>

        {/* HERO CALLOUT BANNER: Highlighting Daily OPD vs Appointment Basis */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Daily OPD Highlight */}
            <div className="lg:col-span-7 bg-gradient-to-br from-emerald-50/70 to-teal-50/40 rounded-2xl p-6 border border-emerald-200/80">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Daily OPD Available
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal mb-2">
                Daily Outpatient Department (OPD)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 mb-4 font-light">
                Consultations are actively conducted every day by our senior consultant physicians and surgeons:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3.5 border border-emerald-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Bone className="w-4 h-4 text-[#0068B0]" />
                    <span>Orthopaedics</span>
                  </div>
                  <div className="text-[11px] text-muted mt-1">
                    Morning & Evening Daily OPD
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-emerald-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Droplets className="w-4 h-4 text-[#0068B0]" />
                    <span>Urology</span>
                  </div>
                  <div className="text-[11px] text-muted mt-1">
                    Daily Stone & Renal OPD
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-emerald-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Stethoscope className="w-4 h-4 text-[#0068B0]" />
                    <span>General Medicine</span>
                  </div>
                  <div className="text-[11px] text-muted mt-1">
                    Adult Primary & Internal Care
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Appointment Basis Highlight */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 rounded-2xl p-6 border border-blue-200/80">
              <div className="flex items-center gap-2.5 mb-3">
                <CalendarCheck className="w-4 h-4 text-[#0068B0]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0068B0]">
                  Available on Appointment Basis
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal mb-2">
                Specialist Consultations
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 mb-4 font-light">
                All remaining specialities are available through scheduled appointments:
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Nephrology
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Dermatology
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Obstetrics & Gynaecology
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Oral & Maxillofacial (OMFS)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Gastroenterology
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Neurosurgery
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-charcoal">
                  Plastic Surgery
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#0068B0] text-white shadow-sm"
                : "bg-white text-muted hover:text-charcoal border border-line"
            }`}
          >
            All Specialities ({allHospitalSpecialities.length})
          </button>
          <button
            onClick={() => setActiveTab("daily-opd")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "daily-opd"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-200"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Daily OPD Available (3)
          </button>
          <button
            onClick={() => setActiveTab("appointment")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "appointment"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-[#0068B0] hover:bg-blue-50 border border-blue-200"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Available on Appointment Basis (7)
          </button>
          <button
            onClick={() => setActiveTab("super")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "super"
                ? "bg-[#0068B0] text-white shadow-sm"
                : "bg-white text-muted hover:text-charcoal border border-line"
            }`}
          >
            Super Specialities
          </button>
          <button
            onClick={() => setActiveTab("multi")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "multi"
                ? "bg-[#0068B0] text-white shadow-sm"
                : "bg-white text-muted hover:text-charcoal border border-line"
            }`}
          >
            Multispecialities
          </button>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredSpecialities.map((spec) => {
            const Icon = getIcon(spec.iconName);
            const isDaily = spec.opdType === "Daily OPD";

            return (
              <div
                key={spec.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between shadow-soft hover:shadow-lg ${
                  isDaily 
                    ? "border-emerald-200/80 hover:border-emerald-500" 
                    : "border-line hover:border-[#0068B0]"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Status Pill */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isDaily 
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                        : "bg-blue-50 text-[#0068B0] border border-blue-100"
                    }`}>
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isDaily
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200 flex items-center gap-1"
                          : "bg-blue-50 text-blue-800 border-blue-200 flex items-center gap-1"
                      }`}>
                        {isDaily ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            Daily OPD
                          </>
                        ) : (
                          <>
                            <Calendar className="w-3 h-3 text-[#0068B0]" />
                            Appointment Basis
                          </>
                        )}
                      </span>
                      <span className="text-[10px] text-muted font-medium mt-1">
                        {spec.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-charcoal mb-2">
                    {spec.name}
                  </h3>

                  {/* Schedule line */}
                  <div className="flex items-center gap-1.5 text-xs text-charcoal font-medium mb-3">
                    <Clock className={`w-3.5 h-3.5 ${isDaily ? "text-emerald-600" : "text-[#0068B0]"}`} />
                    <span className="line-clamp-1">{spec.scheduleInfo}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-5 font-light">
                    {spec.shortDesc}
                  </p>
                </div>

                {/* Bottom Procedures & Actions */}
                <div className="pt-4 border-t border-line/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal mb-2.5">
                    Key Procedures & Treatments:
                  </div>
                  <div className="space-y-1.5 mb-5">
                    {spec.procedures.slice(0, 3).map((proc) => (
                      <div key={proc} className="text-xs text-muted flex items-start gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isDaily ? "text-emerald-600" : "text-[#0068B0]"}`} />
                        <span className="truncate">{proc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    {spec.href ? (
                      <Link
                        href={spec.href}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-[#0068B0] text-charcoal hover:text-white text-xs font-semibold transition-colors"
                      >
                        <span>Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => handleOpenAppointment(spec.name)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors ${
                        isDaily
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : "bg-[#0068B0] hover:bg-[#075486] text-white"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{isDaily ? "Book Daily OPD" : "Book Appointment"}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Detailed Links to Major Departments */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/specialities/orthopaedics"
            className="p-6 sm:p-8 rounded-3xl bg-blue-50/60 border border-blue-200 hover:border-[#0068B0] transition-all flex items-center justify-between group shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Super Speciality Department
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Daily OPD Available
                </span>
              </div>
              <h4 className="text-xl font-bold font-heading text-charcoal mt-1 group-hover:text-[#0068B0] transition-colors">
                Orthopaedic Surgeries & Sub-Specialities
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Joint replacement, 24/7 fracture trauma, keyhole arthroscopy, spine care & physiotherapy.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-blue-200 flex items-center justify-center text-[#0068B0] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="/specialities/urology"
            className="p-6 sm:p-8 rounded-3xl bg-white border border-line hover:border-[#0068B0] transition-all flex items-center justify-between group shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Super Speciality Department
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Daily OPD Available
                </span>
              </div>
              <h4 className="text-xl font-bold font-heading text-charcoal mt-1 group-hover:text-[#0068B0] transition-colors">
                Urology Surgeries & Laser Stone Clinic
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Laser kidney stone treatments (RIRS / PCNL), prostate surgeries, endourology & andrology.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0068B0] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

      </div>

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedDept={selectedDept}
      />
    </section>
  );
}
