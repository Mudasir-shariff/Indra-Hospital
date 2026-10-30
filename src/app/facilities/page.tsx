import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import { facilitiesData, facilityPhotos } from "@/data/facilities";
import { CheckCircle2, ShieldCheck, Microscope, HeartPulse, Sparkles, Camera } from "lucide-react";

import { buildMeta, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Facilities & Infrastructure | Indira Hospital, Chintamani",
  description: "Explore Indira Hospital's 30-bed surgical infrastructure: 2 modular OTs with laminar airflow, digital C-Arms, 24/7 digital X-ray, 24/7 pharmacy, post-op recovery & rehabilitation centre.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Facilities", path: "/facilities" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Hospital Infrastructure"
        title="Modern Infrastructure Designed for Clinical Excellence"
        subtitle="At Indira Hospital, every surgical theatre, diagnostic unit, pharmacy, and patient room is thoughtfully designed with a strong focus on sterility, patient safety, and clinical comfort."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Visual Photo Tour Strip */}
      <section className="py-12 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0068B0] mb-2">
                <Camera className="w-3.5 h-3.5" /> Photographic Tour
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Inside Our Healthcare Facility
              </h2>
              <p className="text-sm text-muted max-w-2xl mt-1 font-light">
                Authentic photographs of our modular surgical suites, digital imaging, 24/7 in-house pharmacy, reception counter, inpatient recovery wards, and rehabilitation centre.
              </p>
            </div>
            <div className="text-xs text-[#0068B0] font-semibold bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 self-start md:self-auto">
              8 Real Clinical Facilities
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilityPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group rounded-2xl overflow-hidden border border-line bg-[#FAFAF8] shadow-soft hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {photo.badge}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold font-heading text-charcoal line-clamp-2 mb-1.5">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-muted leading-relaxed font-light line-clamp-3">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-line/60">
                    <div className="flex flex-wrap gap-1">
                      {photo.specs.slice(0, 2).map((s) => (
                        <span key={s} className="text-[9px] bg-white text-charcoal px-2 py-0.5 rounded border border-line font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities Detailed Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {facilitiesData.map((category, idx) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Text Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                        Facility Category 0{idx + 1}
                      </span>
                      {category.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0068B0] border border-blue-200">
                          {category.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal mt-1 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted leading-relaxed font-light">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAF8] border border-line/60">
                        <CheckCircle2 className="w-4 h-4 text-[#0068B0] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-charcoal font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facility Image Showcase Column */}
                <div className="lg:col-span-5 space-y-4">
                  {category.image && (
                    <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border border-line shadow-sm group">
                      <Image
                        src={category.image}
                        alt={category.imageAlt || category.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 mb-1">
                          {category.badge || category.title}
                        </span>
                        {category.imageCaption && (
                          <p className="text-[11px] text-white/95 leading-tight font-light">
                            {category.imageCaption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Secondary Image for categories with a second facility photo */}
                  {category.secondaryImage && (
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-line shadow-sm group">
                      <Image
                        src={category.secondaryImage}
                        alt={category.secondaryImageAlt || "Secondary Facility View"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 mb-1">
                          {category.secondaryImageAlt?.split(" - ")[0] || "Featured Facility"}
                        </span>
                        {category.secondaryImageCaption && (
                          <p className="text-[11px] text-white/95 leading-tight font-light">
                            {category.secondaryImageCaption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
