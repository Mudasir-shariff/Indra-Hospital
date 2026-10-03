import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, Droplets, Zap, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Kidney Stone Surgery (Laser, RIRS, PCNL) | Indira Hospital",
  description: "Advanced minimally invasive laser kidney stone surgery: RIRS, PCNL, Mini-PCNL, URS, and cystolithotripsy with fastest recovery.",
};

export default function KidneyStonesPage() {
  const procedures = [
    {
      title: "RIRS (Retrograde Intrarenal Surgery)",
      desc: "Scarless keyhole laser procedure passing a flexible ureteroscope through the natural urinary passage to fragment kidney stones with Holmium laser."
    },
    {
      title: "PCNL (Percutaneous Nephrolithotomy)",
      desc: "Minimally invasive keyhole entry directly into the kidney for large, staghorn, or complex stone clearance with ultrasonic or pneumatic lithotripsy."
    },
    {
      title: "Mini-PCNL",
      desc: "Ultra-thin miniaturized tract entry reducing bleeding risk and hospital stay, ideal for pediatric and moderate-sized refractory stones."
    },
    {
      title: "URS (Ureteroscopy) & Laser Fragmentation",
      desc: "Endoscopic laser disintegration of stones lodged in the lower, mid, or upper ureter causing acute flank pain and hydronephrosis."
    },
    {
      title: "Cystolithotripsy",
      desc: "Endoscopic laser or mechanical crushing and removal of bladder stones through natural channels with same-day or 24-hr discharge."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Urology Sub-Speciality"
        title="Kidney Stone Laser Clinic"
        subtitle="Advanced treatment for kidney, ureter, and bladder stones using state-of-the-art minimally invasive endoscopes and Holmium laser technology."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Urology", href: "/specialities/urology" }
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
                Painless, Scarless Laser Stone Clearance
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                Urinary stone disease can cause excruciating flank pain, burning urination, nausea, and hematuria (blood in urine). At Indira Hospital, our specialized Urology Department under Dr. Shashank K. A. offers complete diagnostic evaluation and modern endoscopic laser fragmentation.
              </p>
              <p className="text-base text-muted leading-relaxed font-light">
                Using flexible digital scopes and high-energy laser fibers, even difficult-to-reach lower pole kidney stones are turned into fine dust and washed out safely without large incisions.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Stone Procedures Performed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {procedures.map((proc) => (
                    <div key={proc.title} className="bg-white p-6 rounded-2xl border border-line shadow-soft">
                      <CheckCircle2 className="w-5 h-5 text-[#0068B0] mb-2" />
                      <h4 className="text-base font-bold font-heading text-charcoal mb-1">
                        {proc.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                        {proc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Treatment Benefits
                </span>
                <h3 className="text-xl font-bold font-heading text-charcoal">
                  Why Modern Laser Stone Surgery?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>No large skin cuts or scars (natural access)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>High stone-free clearance rates in single sitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Discharge within 24 to 48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Immediate relief from acute colic and obstruction</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                  >
                    Consult Kidney Stone Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
