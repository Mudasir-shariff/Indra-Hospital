import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { facilitiesData } from "@/data/facilities";
import { CheckCircle2, Building, ShieldCheck, Microscope, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Facilities & Infrastructure | Indira Hospital Chintamani",
  description: "Explore our 30-bed hospital infrastructure, two advanced modular operation theatres, two digital C-Arms, 24/7 digital X-ray, lab, and physiotherapy centre.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Hospital Infrastructure"
        title="Modern Infrastructure Designed for Excellence"
        subtitle="At Indira Hospital, every surgical theatre, diagnostic unit, and patient room is thoughtfully designed with a strong focus on sterility, patient safety, and clinical comfort."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {facilitiesData.map((category, idx) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft"
            >
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Facility Category 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1 mb-2">
                  {category.title}
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed font-light">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-line">
                {category.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAFAF8] border border-line/60">
                    <CheckCircle2 className="w-5 h-5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
