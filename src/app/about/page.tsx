import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { siteData } from "@/data/site";
import { Award, Building2, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Indira Hospital Chintamani",
  description: "Learn about Indira Hospital's journey from a small clinic in 1998 to a premier 30-bed Super Speciality Orthopaedics & Urology Center.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />
      
      <SubpageHero
        category="Hospital Background & Legacy"
        title="Over 28 Years of Healing with Compassion and Precision"
        subtitle="The journey of Indira Hospital, Chintamani — from a dedicated outpatient clinic in 1998 to a modern 30-bed Super Speciality Orthopaedics & Urology surgical centre."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Story Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-charcoal/90 leading-relaxed font-light">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
                Our Story: Clinical Excellence Closer to Home
              </h2>
              {siteData.aboutStory.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>
                Today, Indira Hospital proudly stands as a Super Speciality Orthopaedics & Urology Centre, offering advanced diagnostics, modern surgical procedures, specialist consultations, and personalized treatment plans designed around each patient's unique recovery goals.
              </p>
              <p>
                With a team of experienced doctors, skilled nurses, operation theatre technicians, physiotherapists, and dedicated healthcare staff, we remain committed to providing healthcare built on compassion, clinical excellence, patient safety, and trust.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-6">
                <h3 className="text-lg font-bold font-heading text-charcoal">
                  Hospital Quick Facts
                </h3>
                <div className="space-y-4 text-sm divide-y divide-line">
                  <div className="pt-2">
                    <span className="text-xs text-muted uppercase font-bold block">Founded</span>
                    <span className="font-semibold text-charcoal">1998 (Clinic) → 2025 (Super Speciality)</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs text-muted uppercase font-bold block">Capacity</span>
                    <span className="font-semibold text-charcoal">30-Bed Super Speciality Hospital</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs text-muted uppercase font-bold block">Surgical Infrastructure</span>
                    <span className="font-semibold text-charcoal">2 Modular OTs + 1 Minor Day-Care OT</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs text-muted uppercase font-bold block">Imaging Technology</span>
                    <span className="font-semibold text-charcoal">2 Digital C-Arms + 24/7 Digital X-Ray (DR)</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs text-muted uppercase font-bold block">Core Specialities</span>
                    <span className="font-semibold text-charcoal">Orthopaedics, Urology & Trauma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Milestones */}
          <div className="border-t border-line pt-16 mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight mb-8">
              Key Hospital Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.milestones.map((ms) => (
                <div key={ms.year} className="bg-white rounded-2xl p-7 border border-line shadow-soft">
                  <div className="text-3xl font-extrabold font-heading text-[#0068B0] mb-2">
                    {ms.year}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-charcoal mb-2">
                    {ms.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {ms.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="border-t border-line pt-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight mb-8">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Clinical Excellence", desc: "Evidence-based surgical protocols and 30+ years of orthopaedic mastery." },
                { title: "Patient Safety First", desc: "Rigorous infection control and laminar air-flow modular theatres." },
                { title: "Ethical Healthcare", desc: "Transparent consultations, cashless insurance and honest recommendations." },
                { title: "Compassionate Care", desc: "Personalized bedside nursing and continuous post-operative rehabilitation." },
              ].map((val) => (
                <div key={val.title} className="bg-white rounded-2xl p-6 border border-line shadow-soft">
                  <CheckCircle2 className="w-6 h-6 text-[#0068B0] mb-3" />
                  <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {val.desc}
                  </p>
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
