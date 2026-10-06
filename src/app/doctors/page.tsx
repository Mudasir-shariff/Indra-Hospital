import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import Image from "next/image";
import { doctorsData, visitingSpecialists } from "@/data/doctors";
import { Stethoscope, Award, CheckCircle2, Calendar, Phone } from "lucide-react";
import { siteData } from "@/data/site";

import { buildMeta, getDoctorListJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Our Doctors & Specialists | Indira Hospital, Chintamani",
  description: "Meet our specialist doctors in Chintamani: expert orthopaedic surgeons, urologists, gynaecologists, and maxillofacial surgeons.",
  path: "/doctors",
});

export default function DoctorsPage() {
  const consultants = doctorsData;

  const doctorListJsonLd = getDoctorListJsonLd();
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Doctors", path: "/doctors" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Clinical Team"
        title="Our Doctors & Specialists"
        subtitle="Experienced surgeons and clinicians committed to delivering advanced, ethical, and patient-centred healthcare through evidence-based medical practices."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Senior Consultants Section */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Specialist Faculty
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                Consultant Surgeons & Specialists
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {consultants.map((doc) => (
                <div
                  key={doc.slug}
                  className="bg-white rounded-3xl border border-line shadow-soft flex flex-col sm:flex-row hover:border-[#0068B0]/40 transition-all overflow-hidden group"
                >
                  {/* Photo */}
                  <div className="relative w-full sm:w-60 md:w-64 aspect-[4/5] sm:aspect-auto sm:min-h-full flex-shrink-0 bg-slate-100 overflow-hidden">
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 256px"
                        className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                        priority={doc.slug === "dr-venkatesh-kr" || doc.slug === "dr-shashank-ka"}
                      />
                    ) : (
                      <div className="w-full h-full min-h-[280px] flex items-center justify-center text-[#0068B0] font-heading font-extrabold text-5xl">
                        {doc.name.split(" ")[1]?.[0] || doc.name[0]}
                      </div>
                    )}
                    {doc.experience && (
                      <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-emerald-600/95 text-white text-xs font-bold backdrop-blur-sm shadow-sm">
                        {doc.experience} Exp
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                        {doc.department}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal mt-1 mb-1">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-muted mb-3">
                        {doc.title}
                      </p>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-5">
                        {doc.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-line">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal mb-2">
                        Clinical Focus:
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 mb-5">
                        {doc.specialization.map((spec) => (
                          <div key={spec} className="text-xs text-muted flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-blue-50 hover:bg-[#0068B0] text-[#0068B0] hover:text-white font-semibold text-xs transition-colors"
                      >
                        Book Consultation with {doc.name}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Specialists Section */}
          <div className="border-t border-line pt-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-semibold text-[#0068B0] uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" /> Available on Appointment Basis
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                Visiting Specialist Consultants
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl font-light">
                Patients in Chintamani benefit from specialized consultations in Nephrology, Dermatology, Gastroenterology, Neurosurgery, and Plastic Surgery without travelling to distant metropolitan centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visitingSpecialists.map((vis) => (
                <div key={vis.speciality} className="bg-white rounded-2xl p-6 sm:p-7 border border-line shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                        Appointment Basis
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                      {vis.speciality}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4 font-light">
                      {vis.scope}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <span className="text-[11px] text-[#0068B0] font-semibold block mb-2">
                      {vis.schedule}
                    </span>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal hover:text-[#0068B0]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0068B0]" /> Book Consultation: {siteData.contact.phone}
                    </a>
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
