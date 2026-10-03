import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { patientInfoData } from "@/data/patientInfo";
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Users, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";

import { buildMeta, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "OPD Timings & Patient Guide | Indira Hospital, Chintamani",
  description: "Patient guide & OPD consultation timings at Indira Hospital Chintamani: morning & evening specialist clinics, visiting hours, admission process & rights.",
  path: "/patient-info",
});

export default function PatientInfoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Patient Guide", path: "/patient-info" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Patient Guide"
        title="Making Your Healthcare Journey Comfortable & Safe"
        subtitle="Important information to help you prepare for your specialist consultation, hospital admission, inpatient stay, and discharge."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* OPD & Visiting Hours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OPD Timings */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Consultation Hours
                  </span>
                  <h2 className="text-xl font-bold font-heading text-charcoal">
                    Outpatient (OPD) Timings
                  </h2>
                </div>
              </div>

              <div className="space-y-4 divide-y divide-line">
                {patientInfoData.opdTimings.map((opd) => (
                  <div key={opd.department} className="pt-3 first:pt-0">
                    <div className="text-sm font-bold text-charcoal">{opd.department}</div>
                    <div className="text-xs font-semibold text-[#0068B0] mt-0.5">{opd.timings}</div>
                    {opd.details && (
                      <div className="text-xs text-muted mt-1 font-light">{opd.details}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Visiting Hours */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Inpatient Department
                  </span>
                  <h2 className="text-xl font-bold font-heading text-charcoal">
                    Hospital Visiting Hours
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {patientInfoData.visitingHours.map((vh) => (
                  <div key={vh.slot} className="p-4 rounded-2xl bg-[#FAFAF8] border border-line flex items-center justify-between">
                    <span className="text-xs font-semibold text-charcoal">{vh.slot}</span>
                    <span className="text-xs font-bold text-[#0068B0] px-3 py-1 bg-white rounded-lg border border-line">
                      {vh.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted leading-relaxed font-light">
                * To protect patient recovery and infection control, a maximum of 2 visitors are allowed at the bedside during scheduled hours.
              </p>
            </div>
          </div>

          {/* What to Bring & Admission Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What to Bring */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Checklist
                  </span>
                  <h3 className="text-xl font-bold font-heading text-charcoal">
                    What to Bring to the Hospital
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {patientInfoData.whatToBring.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-[#0068B0] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block">
                    Admission Protocol
                  </span>
                  <h3 className="text-xl font-bold font-heading text-charcoal">
                    Simple 5-Step Admission
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {patientInfoData.admissionSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF8] border border-line/60">
                    <span className="w-6 h-6 rounded-full bg-[#0068B0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-charcoal font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Rights & Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-line pt-16">
            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Charter of Care
              </span>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-4">
                Patient Rights
              </h3>
              <div className="space-y-3">
                {patientInfoData.patientRights.map((right) => (
                  <div key={right} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-[#0068B0] flex-shrink-0 mt-0.5" />
                    <span>{right}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-line shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C03A21] block mb-1">
                Cooperation & Safety
              </span>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-4">
                Patient & Attendant Responsibilities
              </h3>
              <div className="space-y-3">
                {patientInfoData.patientResponsibilities.map((resp) => (
                  <div key={resp} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <AlertCircle className="w-4 h-4 text-[#C03A21] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
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
