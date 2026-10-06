import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import { insuranceData } from "@/data/insurance";
import { ShieldCheck, Phone, CheckCircle2, FileText, ArrowRight } from "lucide-react";

import { buildMeta, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Insurance & Cashless TPA | Indira Hospital, Chintamani",
  description: "Cashless mediclaim & TPA insurance services for orthopaedic and urology surgeries at Indira Hospital Chintamani. Dedicated insurance desk: +91 99805 65420.",
  path: "/insurance",
});

export default function InsurancePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Insurance & TPA", path: "/insurance" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Financial Services"
        title={insuranceData.title}
        subtitle={insuranceData.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Overview & Help Desk Executive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
                Quality Healthcare Made Affordable & Transparent
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {insuranceData.description}
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  How Cashless Admission Works
                </h3>
                <div className="space-y-3">
                  {insuranceData.cashlessSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-line shadow-soft">
                      <span className="w-6 h-6 rounded-full bg-[#0068B0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Officer Contact Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-6">
              {insuranceData.executive.image ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-blue-100">
                  <Image
                    src={insuranceData.executive.image}
                    alt={insuranceData.executive.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
              )}

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                    Insurance Help Desk
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-charcoal mb-1">
                    {insuranceData.executive.name}
                  </h3>
                  <p className="text-xs text-muted">
                    {insuranceData.executive.role}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-line">
                  <div className="text-xs text-muted mb-1 font-semibold">Direct Phone / WhatsApp</div>
                  <div className="text-xl font-bold font-heading text-charcoal">
                    {insuranceData.executive.phone}
                  </div>
                </div>

                <a
                  href={`tel:${insuranceData.executive.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white font-medium text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Call Insurance Desk
                </a>

                <p className="text-xs text-muted leading-relaxed font-light">
                  Please call prior to your planned hospitalization date to verify cashless coverage and avoid admission delays.
                </p>
              </div>
            </div>
          </div>

          {/* Document Checklists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-line pt-16">
            {/* Required for Admission */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Pre-Authorization
                  </span>
                  <h3 className="text-xl font-bold font-heading text-charcoal">
                    Documents Required at Admission
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {insuranceData.requiredAdmissionDocs.map((doc) => (
                  <div key={doc} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-[#0068B0] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reimbursement Claims Support */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Reimbursement Support
                  </span>
                  <h3 className="text-xl font-bold font-heading text-charcoal">
                    Claim Documents Provided at Discharge
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {insuranceData.reimbursementDocs.map((doc) => (
                  <div key={doc} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-[#0068B0] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
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
