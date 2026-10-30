import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { orthopaedicDepartment } from "@/data/specialities";
import { ArrowRight, CheckCircle2, Bone, Shield, Activity, Sparkles } from "lucide-react";

import { buildMeta, getSpecialityJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Orthopaedic Surgeries in Chintamani | Indira Hospital",
  description: "Comprehensive orthopaedic surgical care in Chintamani: Joint Replacement (TKR/THR), 24/7 Fracture Trauma, Arthroscopy, and Spine Surgery with in-house rehabilitation.",
  path: "/specialities/orthopaedics",
});

export default function OrthopaedicsPage() {
  const specialityJsonLd = getSpecialityJsonLd({
    name: "Orthopaedic Surgery",
    description: "Advanced orthopaedic surgical solutions for bone, joint, spine, sports injuries, and trauma in Chintamani, Karnataka.",
    path: "/specialities/orthopaedics",
    procedures: orthopaedicDepartment.highlights,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Specialities", path: "/#specialities" },
    { name: "Orthopaedics", path: "/specialities/orthopaedics" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialityJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

          {/* Orthopaedic Infrastructure Showcase */}
          <div className="border-t border-line pt-16 mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Surgical & Recovery Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Modular Operating Theatres & Active Rehabilitation
              </h2>
              <p className="text-sm text-muted mt-2 font-light">
                Our orthopaedic centre is backed by ultra-clean modular theatres with intraoperative fluoroscopy and dedicated physiotherapy for accelerated healing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-soft group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/modular-ot-carm.jpg"
                    alt="Modular Operation Theatre with Digital C-Arm for Orthopaedic Surgeries"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded border border-white/20">
                    Modular OT 1 & Digital C-Arm
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                    Laminar Airflow Theatre & C-Arm System
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    Equipped with laminar air flow, HEPA filters, and Allengers Digital C-Arm imaging for precise intraoperative fracture fixation, implant positioning, and spine alignment.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-soft group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/physiotherapy-rehab.jpg"
                    alt="Physiotherapy and Rehabilitation Centre at Indira Hospital"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded border border-white/20">
                    Physiotherapy & Rehab Unit
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                    Computerized Traction & Joint Rehabilitation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    Features MOBILUX-5 TRAC computerized spinal and cervical traction, electrotherapy, and individualized muscle strengthening protocols under expert physiotherapists.
                  </p>
                </div>
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
