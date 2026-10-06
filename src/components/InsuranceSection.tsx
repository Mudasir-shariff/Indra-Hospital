import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { insuranceData } from "@/data/insurance";

export default function InsuranceSection() {
  return (
    <section id="insurance" className="py-20 lg:py-28 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information & Key Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
              <span className="w-6 h-0.5 bg-[#C03A21]" />
              Insurance & TPA Help Desk
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
              Cashless Hospitalization & Claims Assistance
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed font-light">
              We coordinate directly with all major insurance companies and Third-Party Administrators (TPAs) to make quality orthopaedic and urology surgery stress-free and financially transparent.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal">
                  Direct pre-authorization filing upon admission recommendation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal">
                  Comprehensive assistance for reimbursement claims if cashless is unavailable
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0068B0] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal">
                  Full documentation support: operative notes, discharge summary & pharmacy receipts
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/insurance"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0068B0] hover:text-[#075486] transition-colors group"
              >
                <span>Read detailed cashless guidelines & documents checklist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Help Desk Executive Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FAFAF8] border border-line p-8 shadow-soft relative overflow-hidden">
              {insuranceData.executive.image ? (
                <div className="w-32 h-32 rounded-2xl overflow-hidden border border-blue-100 mb-6">
                  <Image
                    src={insuranceData.executive.image}
                    alt={insuranceData.executive.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0068B0] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
              )}

              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Dedicated Insurance Officer
              </span>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-1">
                {insuranceData.executive.name}
              </h3>
              <p className="text-xs text-muted mb-6">
                {insuranceData.executive.role} — Indira Hospital
              </p>

              <div className="p-4 rounded-2xl bg-white border border-line mb-6">
                <div className="text-xs text-muted mb-1">Direct Mobile Contact</div>
                <div className="text-xl font-bold font-heading text-charcoal">
                  {insuranceData.executive.phone}
                </div>
              </div>

              <a
                href={`tel:${insuranceData.executive.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white font-medium text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" /> Call Insurance Desk
              </a>

              <p className="text-[11px] text-muted text-center mt-3">
                Pre-authorization support available during OPD working hours.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
