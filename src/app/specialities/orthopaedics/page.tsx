import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { orthopaedicDepartment } from "@/data/specialities";
import { ArrowRight, CheckCircle2, Bone, Shield, Activity } from "lucide-react";

export const metadata = {
  title: "Orthopaedic Surgeries | Indira Hospital Chintamani",
  description: "Comprehensive orthopaedic surgical care: Joint Replacement (TKR/THR), Trauma & Fracture, Arthroscopy, Spine Surgery, and Deformity Correction.",
};

export default function OrthopaedicsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Centre of Excellence"
        title={orthopaedicDepartment.title}
        subtitle={orthopaedicDepartment.headline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specialities", href: "/#specialities" }
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Department Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
                Comprehensive Bone, Joint & Spine Surgical Solutions
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {orthopaedicDepartment.description}
              </p>

              <div className="pt-4">
                <h3 className="text-lg font-bold font-heading text-charcoal mb-4">
                  Why Choose Our Orthopaedic Department?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {orthopaedicDepartment.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-line shadow-soft space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Director & Chief Surgeon
              </span>
              <h3 className="text-xl font-bold font-heading text-charcoal">
                Dr. Venkatesh K. R.
              </h3>
              <p className="text-xs text-muted">
                30+ years of clinical and surgical expertise in joint reconstruction, complex trauma, and corrective orthopaedics.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                >
                  Book Orthopaedic Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Sub-specialities Detail Grid */}
          <div className="border-t border-line pt-16">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Procedures & Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                9 Specialized Orthopaedic Sub-Departments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orthopaedicDepartment.subSpecialities.map((sub) => (
                <div
                  key={sub.slug}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-line shadow-soft flex flex-col justify-between hover:border-[#0068B0]/50 transition-all group"
                >
                  <div>
                    <h3 className="text-lg font-bold font-heading text-charcoal group-hover:text-[#0068B0] transition-colors mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4 font-light">
                      {sub.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-line">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                        Key Procedures:
                      </div>
                      {sub.procedures.map((proc) => (
                        <div key={proc} className="text-xs text-muted flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-line/50">
                    <Link
                      href={`/specialities/${sub.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068B0] hover:text-[#C03A21] transition-colors"
                    >
                      <span>Explore this discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
