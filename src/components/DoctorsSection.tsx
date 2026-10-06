import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UserCheck, Stethoscope, Award, Calendar } from "lucide-react";
import { doctorsData, visitingSpecialists } from "@/data/doctors";

export default function DoctorsSection() {
  const primaryDoctors = doctorsData.slice(0, 5);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
              <span className="w-6 h-0.5 bg-[#C03A21]" />
              Medical Leadership & Faculty
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
              Experienced Specialists Dedicated to Your Health
            </h2>
            <p className="text-muted text-sm sm:text-base mt-2">
              Our multidisciplinary team of senior consultants, surgeons, and healthcare specialists work seamlessly to achieve superior clinical outcomes.
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0068B0] hover:text-[#075486] transition-colors self-start md:self-auto group"
          >
            <span>View All Specialists & Visiting Faculty</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Primary Doctors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {primaryDoctors.map((doc) => (
            <div
              key={doc.slug}
              className="bg-[#FAFAF8] rounded-2xl border border-line flex flex-col justify-between hover:border-[#0068B0]/40 transition-all duration-200 shadow-soft group overflow-hidden"
            >
              <div>
                {/* Doctor Photo Header */}
                <div className="relative w-full h-64 sm:h-72 bg-blue-50 overflow-hidden">
                  {doc.image ? (
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#0068B0] font-heading font-extrabold text-4xl">
                      {doc.name.split(" ")[1]?.[0] || doc.name[0]}
                    </div>
                  )}
                  {doc.experience && (
                    <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-bold backdrop-blur-sm shadow-sm">
                      {doc.experience} Exp
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0068B0] block">
                    {doc.department}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-charcoal mt-1 group-hover:text-[#0068B0] transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-medium text-muted mt-1 leading-snug">
                    {doc.title}
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mt-4 mb-2 font-light">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-line/60">
                <div className="text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                  Specialized In:
                </div>
                <div className="space-y-1">
                  {doc.specialization.slice(0, 2).map((item) => (
                    <div key={item} className="text-xs text-muted flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C03A21]" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Visiting Specialist Highlights Card */}
          <div className="bg-gradient-to-br from-[#0A2F4A] to-[#0068B0] rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-soft">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#9BE8D2]" /> Available on Appointment Basis
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">
                Visiting Specialist Faculty
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-light">
                Patients in Chintamani have convenient local access to superspecialist consultations:
              </p>

              <div className="space-y-3">
                {visitingSpecialists.map((vis) => (
                  <div key={vis.speciality} className="pb-2 border-b border-white/10 last:border-none">
                    <div className="text-sm font-semibold text-white">
                      {vis.speciality}
                    </div>
                    <div className="text-xs text-white/70 line-clamp-1">
                      {vis.scope}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/doctors"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-charcoal font-semibold text-xs transition-colors hover:bg-slate-100"
              >
                <span>View Full Doctor Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
