import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { urologyDepartment } from "@/data/specialities";
import { ArrowRight, CheckCircle2, Droplets, Activity, ShieldCheck, Sparkles } from "lucide-react";

import { buildMeta, getSpecialityJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Urology Surgeries in Chintamani | Indira Hospital",
  description: "Advanced urology hospital in Chintamani: Holmium laser kidney stone surgery (RIRS/PCNL), prostate surgery (TURP), uro-oncology & pediatric urology.",
  path: "/specialities/urology",
});

export default function UrologyPage() {
  const specialityJsonLd = getSpecialityJsonLd({
    name: "Urology & Endourology",
    description: "Advanced urological and laser surgeries for kidney stones, prostate disorders, and urinary tract conditions at Indira Hospital Chintamani.",
    path: "/specialities/urology",
    procedures: urologyDepartment.highlights,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Specialities", path: "/#specialities" },
    { name: "Urology", path: "/specialities/urology" },
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
        title={urologyDepartment.title}
        subtitle={urologyDepartment.headline}
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
                Advanced Urological & Endoscopic Laser Surgeries
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {urologyDepartment.description}
              </p>

              <div className="pt-4">
                <h3 className="text-lg font-bold font-heading text-charcoal mb-4">
                  Why Choose Our Urology Department?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {urologyDepartment.highlights.map((item) => (
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
                Lead Urologist & Transplant Surgeon
              </span>
              <h3 className="text-xl font-bold font-heading text-charcoal">
                Dr. Shashank K. A.
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Consultant Urologist, Andrologist & Renal Transplant Surgeon specializing in minimally invasive endourology, RIRS laser stone clearance, and prostate surgery.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                >
                  Book Urology Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Showcase: OT 2 and Recovery Ward */}
          <div className="border-t border-line pt-16 mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Surgical & Recovery Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Modular Endourology Theatres & Monitoring
              </h2>
              <p className="text-sm text-muted mt-2 font-light">
                Our urological surgeries are performed inside advanced sterile modular theatres equipped for laser lithotripsy and continuous post-operative monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-soft group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/modular-ot-2.jpg"
                    alt="Indira Hospital Modular Operation Theatre 2 for Urology Surgeries"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded border border-white/20">
                    Modular Operation Theatre 2
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                    Hermetic Modular Surgical Suite
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    Engineered with air-lock hermetic doors, positive pressure ventilation, and high-definition video endoscopic stacks for Holmium laser kidney stone and prostate procedures.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-soft group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/recovery-monitoring-ward.jpg"
                    alt="Post-Operative Recovery Ward with Digital Multi-Parameter Monitors"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded border border-white/20">
                    Post-Operative Monitoring
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                    High-Dependency Recovery Care
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    Equipped with wall-mounted multi-parameter vital signs monitors, central oxygen, and continuous nursing surveillance for safe, prompt post-anesthesia recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-specialities Detail Grid */}
          <div className="border-t border-line pt-16">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Specialized Urological Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                10 Comprehensive Sub-Specialities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {urologyDepartment.subSpecialities.map((sub) => (
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
                        Procedures & Scope:
                      </div>
                      {sub.procedures.slice(0, 4).map((proc) => (
                        <div key={proc} className="text-xs text-muted flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                          <span className="truncate">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-line/50">
                    <Link
                      href={sub.slug === "kidney-stones" ? "/specialities/kidney-stones" : sub.slug === "prostate-surgery" ? "/specialities/prostate-surgery" : "/contact"}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068B0] hover:text-[#C03A21] transition-colors"
                    >
                      <span>{sub.slug === "kidney-stones" || sub.slug === "prostate-surgery" ? "View Procedure Page" : "Consult Specialist"}</span>
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
