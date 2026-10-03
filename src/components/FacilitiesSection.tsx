import React from "react";
import Link from "next/link";
import { ArrowRight, Building, ShieldCheck, Microscope, HeartPulse, Activity } from "lucide-react";
import { facilitiesData } from "@/data/facilities";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0068B0] mb-2">
            <span className="w-6 h-0.5 bg-[#C03A21]" />
            Infrastructure & Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-charcoal tracking-tight">
            Modern Healthcare Infrastructure Designed for Excellence
          </h2>
          <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed font-light">
            Every aspect of our facility is engineered to ensure sterile surgical safety, rapid accurate diagnostics, and a peaceful recovery environment.
          </p>
        </div>

        {/* Facilities Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((fac, idx) => (
            <div
              key={fac.title}
              className={`rounded-2xl p-6 sm:p-7 border border-line transition-all duration-200 shadow-soft flex flex-col justify-between ${
                idx === 0 
                  ? "bg-gradient-to-br from-[#0A2F4A] to-[#0068B0] text-white lg:col-span-2" 
                  : "bg-white text-charcoal hover:border-[#0068B0]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    idx === 0 ? "bg-white/10 text-white" : "bg-blue-50 text-[#0068B0]"
                  }`}>
                    Facility 0{idx + 1}
                  </span>
                  {idx === 0 && (
                    <span className="text-xs text-[#9BE8D2] font-semibold">
                      Featured Infrastructure
                    </span>
                  )}
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-2 ${
                  idx === 0 ? "text-white" : "text-charcoal"
                }`}>
                  {fac.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                  idx === 0 ? "text-white/85" : "text-muted"
                }`}>
                  {fac.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-current/10">
                  {fac.items.slice(0, idx === 0 ? 5 : 4).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        idx === 0 ? "bg-[#9BE8D2]" : "bg-[#0068B0]"
                      }`} />
                      <span className={idx === 0 ? "text-white/90" : "text-muted"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href="/facilities"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                    idx === 0 
                      ? "text-[#9BE8D2] hover:text-white" 
                      : "text-[#0068B0] hover:text-[#075486]"
                  } transition-colors`}
                >
                  <span>Explore full specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
