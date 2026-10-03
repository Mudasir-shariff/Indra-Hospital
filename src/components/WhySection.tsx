import React from "react";
import { whyReasons } from "@/data/why";

export default function WhySection() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Sticky Big Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-3">
              <span className="w-6 h-0.5 bg-[#C03A21]" />
              The Indira Difference
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight leading-[1.15] mb-6">
              Why Patients Choose Indira Hospital
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6 font-light">
              We combine senior surgical mastery with modular sterile infrastructure, digital intraoperative imaging, and compassionate recovery protocols — bringing world-class healthcare right to Chintamani.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-line shadow-soft hidden sm:block">
              <div className="text-sm font-bold text-charcoal mb-1">
                24/7 Direct Emergency Line
              </div>
              <div className="text-2xl font-bold font-heading text-[#C03A21]">
                08154-405616
              </div>
              <p className="text-xs text-muted mt-1">
                Immediate response for acute trauma and urological emergencies.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Editorial Numbered Differentiators */}
          <div className="lg:col-span-7 divide-y divide-line">
            {whyReasons.map((item) => (
              <div key={item.id} className="py-8 first:pt-0 last:pb-0 group">
                <span className="text-xs font-mono font-bold text-[#0068B0] tracking-wider block mb-2">
                  {item.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal group-hover:text-[#0068B0] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
