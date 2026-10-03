import React from "react";
import { patientJourneySteps } from "@/data/journey";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#EAF3FA] border-t border-[#D3E6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
            <span className="w-6 h-0.5 bg-[#C03A21]" />
            Your Treatment Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
            The Patient Care Journey
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            A structured, transparent 5-step clinical pathway ensuring patient safety and predictable healing.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {patientJourneySteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-[#D3E6F4] shadow-soft relative flex flex-col justify-between hover:border-[#0068B0] transition-colors group"
            >
              <div>
                {/* Step Number with Coral Accent on hover/active */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-heading text-[#0068B0] group-hover:text-[#C03A21] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#0068B0] group-hover:bg-[#C03A21] transition-colors" />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0068B0] mb-1">
                  {step.subtitle}
                </div>
                <h3 className="text-lg font-bold font-heading text-charcoal mb-3 group-hover:text-[#0068B0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-4">
                  {step.description}
                </p>
              </div>

              {step.actionPoint && (
                <div className="pt-3 border-t border-line text-[11px] font-medium text-charcoal/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C03A21]" />
                  <span>{step.actionPoint}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
