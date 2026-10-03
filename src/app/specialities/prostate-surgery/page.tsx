import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, Activity, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Prostate Surgery (TURP & Laser) | Indira Hospital Chintamani",
  description: "Advanced surgical treatment for Benign Prostatic Hyperplasia (BPH), enlarged prostate, urinary obstruction: TURP, HoLEP laser enucleation.",
};

export default function ProstateSurgeryPage() {
  const procedures = [
    {
      title: "TURP (Transurethral Resection of the Prostate)",
      desc: "The gold-standard endoscopic procedure using an electrosurgical loop to shave obstructing prostate tissue, immediately restoring effortless urinary stream."
    },
    {
      title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
      desc: "Advanced anatomical laser dissection peeling the whole obstructing prostate adenoma, ideal for very large prostates with minimal bleeding and shorter catheter time."
    },
    {
      title: "Open Prostatectomy",
      desc: "Indicated for massive prostates exceeding 100g with associated large bladder diverticula or complex calculi."
    },
    {
      title: "BNI (Bladder Neck Incision)",
      desc: "Minimally invasive endoscopic incision for younger men with bladder neck contracture or smaller obstructing prostates."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Urology Sub-Speciality"
        title="Prostate Surgery & BPH Care"
        subtitle="Comprehensive surgical management for enlarged prostate, weak urinary stream, frequent night urination, and acute urinary retention."
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
                Modern Solutions for Enlarged Prostate
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                Benign Prostatic Hyperplasia (BPH) is common in men over 50, causing symptoms such as hesitancy, straining, weak stream, nocturia (waking up multiple times at night to urinate), and risk of sudden urinary blockage.
              </p>
              <p className="text-base text-muted leading-relaxed font-light">
                At Indira Hospital, Dr. Shashank K. A. evaluates patients using uroflowmetry, ultrasound, and clinical assessment to offer the most suitable surgical therapy — ensuring rapid return of normal urination without prolonged catheterization.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Procedures Performed
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
                  Symptom Checklist
                </span>
                <h3 className="text-xl font-bold font-heading text-charcoal">
                  Signs You Need an Evaluation
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Frequent urge to urinate, especially during sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Difficulty starting urination or weak, interrupted stream</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Inability to completely empty the bladder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Recurrent urinary tract infections or blood in urine</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                  >
                    Schedule Prostate Consultation
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
