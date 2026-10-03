import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, Bone, Activity, ShieldCheck, HeartHandshake } from "lucide-react";

import { buildMeta, getSpecialityJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Joint Replacement in Chintamani | Indira Hospital",
  description: "Total Knee Replacement (TKR) and Total Hip Replacement (THR) in Chintamani. Performed by senior surgeons in modular laminar airflow theatres.",
  path: "/specialities/joint-replacement",
});

export default function JointReplacementPage() {
  const procedures = [
    {
      title: "Total Knee Replacement (TKR)",
      desc: "Replacing worn and arthritic knee joint surfaces with high-precision biocompatible titanium and cobalt-chrome implants, restoring natural joint alignment and painless weight-bearing."
    },
    {
      title: "Total Hip Replacement (THR)",
      desc: "Comprehensive replacement of damaged femoral head and acetabular socket with advanced ceramic/polyethylene bearings for severe osteoarthritis, avascular necrosis (AVN), or hip fractures."
    },
    {
      title: "Partial Hip Replacement (Hemiarthroplasty)",
      desc: "Emergency surgical solution for femoral neck fractures in elderly patients, replacing only the damaged ball to enable immediate bed-to-chair mobilization."
    },
    {
      title: "Revision Joint Replacement Surgery",
      desc: "Specialized reconstructive surgery for previously failed, loosened, or infected joint replacements, utilizing specialized augments and revision stems."
    }
  ];

  const specialityJsonLd = getSpecialityJsonLd({
    name: "Joint Replacement Surgery",
    description: "Advanced Total Knee Replacement and Total Hip Replacement surgery at Indira Hospital Chintamani, Karnataka.",
    path: "/specialities/joint-replacement",
    procedures: procedures.map((p) => p.title),
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Specialities", path: "/specialities/orthopaedics" },
    { name: "Joint Replacement", path: "/specialities/joint-replacement" },
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialityJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Orthopaedic Sub-Speciality"
        title="Joint Replacement Surgery"
        subtitle="Restore painless movement, correct chronic arthritic deformities, and reclaim an active lifestyle through advanced knee and hip replacement procedures."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Orthopaedics", href: "/specialities/orthopaedics" }
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
                Advanced Joint Replacement in Chintamani
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                At Indira Hospital, our joint replacement surgical team is led by Dr. Venkatesh K. R. with over 30 years of clinical mastery. We operate within state-of-the-art modular operation theatres featuring ultra-clean laminar airflow and positive pressure to minimize infection risks.
              </p>
              <p className="text-base text-muted leading-relaxed font-light">
                Each patient receives individualized pre-operative templating, tissue-sparing surgical dissection, advanced multimodal pain relief protocols, and bedside physiotherapy starting on day one.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Key Procedures Performed
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
                  Surgical Standard
                </span>
                <h3 className="text-xl font-bold font-heading text-charcoal">
                  Zero Compromise on Sterility
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Laminar Air Flow Modular Theatres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>HEPA filtration & strict sterilization CSSD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Intraoperative Digital C-Arm Confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>In-house Physiotherapy & Fast-Track Mobilization</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                  >
                    Consult Joint Surgeon
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
