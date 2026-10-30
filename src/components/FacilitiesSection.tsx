import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, HeartPulse, Building } from "lucide-react";
import { facilitiesData, facilityPhotos } from "@/data/facilities";

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
            Every aspect of our facility is engineered to ensure sterile surgical safety, rapid accurate diagnostics, 24/7 pharmacy access, and a peaceful recovery environment.
          </p>
        </div>

        {/* Facilities Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilitiesData.map((fac, idx) => (
            <div
              key={fac.title}
              className={`rounded-2xl p-6 sm:p-7 border border-line transition-all duration-200 shadow-soft flex flex-col justify-between group ${
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
                  {fac.badge && idx !== 0 && (
                    <span className="text-[11px] font-medium text-muted">
                      {fac.badge}
                    </span>
                  )}
                </div>

                {/* Facility Image */}
                {fac.image && (
                  <div className={`relative w-full rounded-xl overflow-hidden mb-5 border ${
                    idx === 0 ? "h-56 sm:h-64 border-white/15" : "h-44 sm:h-48 border-line/60"
                  }`}>
                    <Image
                      src={fac.image}
                      alt={fac.imageAlt || fac.title}
                      fill
                      sizes={idx === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {fac.badge && (
                      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {fac.badge}
                      </span>
                    )}
                  </div>
                )}

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

        {/* Real Hospital Gallery Tour Preview */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0068B0] mb-2">
                <Building className="w-3.5 h-3.5" /> Real Hospital Infrastructure Tour
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Inside Indira Hospital, Chintamani
              </h3>
              <p className="text-muted text-xs sm:text-sm mt-1 max-w-2xl font-light">
                Take a direct look at our advanced modular surgical suites, digital DR X-ray, 24/7 in-house pharmacy, reception desk, and recovery wards.
              </p>
            </div>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-[#0068B0] hover:bg-[#0068B0] hover:text-white transition-all text-xs font-semibold flex-shrink-0"
            >
              <span>View All 8 Facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilityPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group rounded-2xl overflow-hidden border border-line bg-[#FAFAF8] flex flex-col hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white uppercase tracking-wider truncate">
                    {photo.badge}
                  </span>
                </div>
                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xs font-bold font-heading text-charcoal line-clamp-1 mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-muted line-clamp-2 leading-relaxed font-light">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-line/60 flex items-center justify-between text-[10px] text-[#0068B0] font-semibold">
                    <span>{photo.category}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
