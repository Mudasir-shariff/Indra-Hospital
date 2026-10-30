import React from "react";
import Image from "next/image";
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
  AlertCircle,
  Building2,
  Activity
} from "lucide-react";

import { buildMeta, getBreadcrumbJsonLd } from "@/lib/seo";
import QrBookingCard from "@/components/QrBookingCard";

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
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-bold text-charcoal">{opd.department}</div>
                      {opd.statusBadge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          opd.statusBadge === "Daily OPD Available" 
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                            : opd.statusBadge === "24/7 Available"
                            ? "bg-red-50 text-[#C03A21] border border-red-200"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                        }`}>
                          {opd.statusBadge}
                        </span>
                      )}
                    </div>
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

          {/* Inpatient & Recovery Environment Photo Showcase */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0068B0] mb-2">
                <Building2 className="w-3.5 h-3.5" /> Inpatient & Diagnostic Environment
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Designed for Calm, Sterile & Supported Healing
              </h2>
              <p className="text-sm text-muted mt-2 leading-relaxed font-light">
                Whether you are admitted for an elective surgery or emergency care, our hospital provides a welcoming reception counter, hygienic general wards, continuous vital signs monitoring suites, 24/7 digital X-ray, and an on-premise pharmacy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Reception Desk */}
              <div className="bg-[#FAFAF8] rounded-2xl overflow-hidden border border-line flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/hospital-reception.jpg"
                    alt="Indira Hospital Main Reception and Patient Helpdesk"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                    Reception & Helpdesk
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                      Admissions & Registration
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-light">
                      Prompt outpatient consultation booking, inpatient admission coordination, and cashless insurance helpdesk desk.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Ward */}
              <div className="bg-[#FAFAF8] rounded-2xl overflow-hidden border border-line flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/general-ward.jpg"
                    alt="Clean and Spacious Inpatient General Ward at Indira Hospital"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                    Inpatient General Ward
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                      30-Bed Inpatient Ward
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-light">
                      Clean, well-ventilated wards with ergonomic patient beds, bedside storage lockers, and 24/7 dedicated nursing staff.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recovery Ward */}
              <div className="bg-[#FAFAF8] rounded-2xl overflow-hidden border border-line flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/recovery-monitoring-ward.jpg"
                    alt="Post-Operative Recovery Ward with Digital Multi-Parameter Monitors"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                    Recovery & Monitoring
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                      Continuous Vital Monitoring
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-light">
                      High-dependency recovery suites with wall-mounted multi-parameter vital monitors, central oxygen, and privacy cubicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Digital X-Ray */}
              <div className="bg-[#FAFAF8] rounded-2xl overflow-hidden border border-line flex flex-col sm:flex-row group">
                <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/facilities/digital-xray.jpg"
                    alt="24/7 Digital Direct Radiography DR X-Ray Facility"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                    24/7 Digital X-Ray
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                    Direct Radiography (DR) Diagnostics
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-light">
                    Immediate digital X-ray imaging for trauma, joint alignment, and pre-op clearance with minimal radiation exposure and instant reporting.
                  </p>
                </div>
              </div>

              {/* In-House Pharmacy */}
              <div className="bg-[#FAFAF8] rounded-2xl overflow-hidden border border-line flex flex-col sm:flex-row group">
                <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/facilities/in-house-pharmacy.jpg"
                    alt="Indira Pharmacy - In-House 24/7 Pharmacy"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/20">
                    24/7 In-House Pharmacy
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="text-base font-bold font-heading text-charcoal mb-1">
                    Indira Pharmacy (ಇಂದಿರ ಫಾರ್ಮಸಿ)
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-light">
                    Fully stocked on-premise pharmacy ensuring round-the-clock availability of prescribed medications, surgical items, and IV fluids.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick QR Appointment Card */}
          <QrBookingCard />

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
