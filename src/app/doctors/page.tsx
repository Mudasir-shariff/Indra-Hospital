import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { doctorsData, visitingSpecialists } from "@/data/doctors";
import { Stethoscope, Award, CheckCircle2, Calendar, Phone } from "lucide-react";
import { siteData } from "@/data/site";

export const metadata = {
  title: "Our Doctors & Specialists | Indira Hospital Chintamani",
  description: "Meet our experienced team of orthopaedic surgeons, urologists, gynaecologists, maxillofacial surgeons, anaesthetists and visiting consultants.",
};

export default function DoctorsPage() {
  const consultants = doctorsData.filter((d) => d.department !== "Anaesthesiology" && d.department !== "Anaesthesiology & Critical Care");
  const anaesthetists = doctorsData.filter((d) => d.department.includes("Anaesthesiology"));

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultants.map((doc) => (
                <div
                  key={doc.slug}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-line shadow-soft flex flex-col justify-between hover:border-[#0068B0]/40 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0068B0] flex items-center justify-center font-heading font-extrabold text-2xl border border-blue-100">
                        {doc.name.split(" ")[1]?.[0] || doc.name[0]}
                      </div>
                      {doc.experience && (
                        <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                          {doc.experience} Surgical Exp
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                      {doc.department}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-charcoal mt-1 mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-muted mb-4">
                      {doc.title}
                    </p>

                    <p className="text-sm text-muted leading-relaxed font-light mb-6">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <div className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                      Clinical Focus:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {doc.specialization.map((spec) => (
                        <div key={spec} className="text-xs text-muted flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-blue-50 hover:bg-[#0068B0] text-[#0068B0] hover:text-white font-semibold text-xs transition-colors"
                    >
                      Book Consultation with {doc.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anaesthesiology Team */}
          <div className="border-t border-line pt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Critical Care & Surgical Safety
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                Department of Anaesthesiology
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl font-light">
                Our anaesthetists ensure painless surgical experiences, patient hemodynamic stability, and vigilant perioperative monitoring inside our modular theatres.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {anaesthetists.map((ana) => (
                <div key={ana.slug} className="bg-white rounded-2xl p-6 border border-line shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center font-heading font-bold text-lg mb-4">
                    {ana.name.split(" ")[1]?.[0] || ana.name[0]}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-0.5">
                    {ana.name}
                  </h3>
                  <div className="text-xs text-[#0068B0] font-semibold mb-3">
                    {ana.title}
                  </div>
                  <p className="text-xs text-muted leading-relaxed font-light">
                    {ana.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Specialists Section */}
          <div className="border-t border-line pt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                Specialized Care Closer to Home
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1">
                Visiting Specialist Consultants
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl font-light">
                Patients in Chintamani benefit from scheduled specialist consultations without having to travel to major metropolitan cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visitingSpecialists.map((vis) => (
                <div key={vis.speciality} className="bg-white rounded-2xl p-6 sm:p-7 border border-line shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center mb-4">
                      <Stethoscope className="w-5 h-5" />
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
                      <Phone className="w-3.5 h-3.5 text-[#0068B0]" /> Check OPD Timings: {siteData.contact.phone}
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
