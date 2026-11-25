import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { buildMeta, getSpecialityJsonLd, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo";

const arthroscopyFaqs = [
  {
    question: "When is arthroscopic keyhole surgery recommended?",
    answer:
      "Arthroscopy may be advised when knee or shoulder injuries—such as ACL/PCL ligament tears, locked meniscus tears, loose cartilage fragments, or rotator cuff tears—cause persistent instability, locking, or pain that does not improve with rest and physiotherapy.",
  },
  {
    question: "How is keyhole arthroscopy different from open joint surgery?",
    answer:
      "Arthroscopy uses tiny puncture incisions (around 4–5 mm) and a narrow high-definition camera rather than a large open cut, allowing surgeons to inspect and repair intra-articular structures with minimal disturbance to surrounding muscle and skin.",
  },
];

export const metadata = buildMeta({
  title: "Arthroscopy & Keyhole Surgery in Chintamani | Indira Hospital",
  description: "Minimally invasive arthroscopy in Chintamani for ACL/PCL ligament tears, meniscus repair, and shoulder injuries at Indira Hospital.",
  path: "/specialities/arthroscopy",
});

export default function ArthroscopyPage() {
  const procedures = [
    {
      title: "ACL Reconstruction",
      desc: "Anatomic keyhole ligament reconstruction using autografts to restore knee joint stability following sports or twisting injuries."
    },
    {
      title: "PCL Reconstruction",
      desc: "Advanced arthroscopic reconstruction of posterior cruciate ligament injuries, often associated with dash-board motor trauma."
    },
    {
      title: "Meniscus Repair & Balancing",
      desc: "Tissue-sparing arthroscopic suturing to preserve natural shock-absorbing meniscus cartilage and prevent premature degenerative arthritis."
    },
    {
      title: "Rotator Cuff Repair",
      desc: "Shoulder keyhole repair of torn supraspinatus and rotator tendons, restoring pain-free overhead arm movements."
    },
    {
      title: "Shoulder Stabilization (Bankart Repair)",
      desc: "Re-anchoring torn labral cartilage in patients suffering from recurrent shoulder joint dislocations."
    },
    {
      title: "Diagnostic Joint Arthroscopy",
      desc: "High-definition endoscopic visualization to detect subtle cartilage fibrillation, loose bodies, or synovitis."
    }
  ];

  const specialityJsonLd = getSpecialityJsonLd({
    name: "Arthroscopic (Keyhole) Surgery",
    description: "Minimally invasive keyhole joint surgery for sports injuries, ligament reconstructions, and cartilage repairs at Indira Hospital Chintamani.",
    path: "/specialities/arthroscopy",
    procedures: procedures.map((p) => p.title),
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Specialities", path: "/specialities/orthopaedics" },
    { name: "Arthroscopy", path: "/specialities/arthroscopy" },
  ]);

  const faqJsonLd = getFaqJsonLd(arthroscopyFaqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Orthopaedic Sub-Speciality"
        title="Arthroscopic (Keyhole) Surgery"
        subtitle="Minimally invasive procedures for sports injuries, ligament reconstructions, and cartilage repairs ensuring faster recovery and minimal scarring."
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
                Keyhole Precision for Active Living
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                Arthroscopy allows our surgeons to inspect, diagnose, and repair complex joint problems through tiny puncture incisions using pencil-sized cameras and micro-instruments. This results in dramatically less pain, minimal blood loss, minimal scar formation, and faster return to sports or manual work.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Arthroscopic Procedures Performed
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
              <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-soft group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/facilities/modular-ot-carm.jpg"
                    alt="Modular Operation Theatre for Arthroscopic Keyhole Surgery at Indira Hospital, Chintamani"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded border border-white/20">
                    Sterile Modular OT Suite
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Recovery Advantage
                </span>
                <h3 className="text-xl font-bold font-heading text-charcoal">
                  Why Keyhole Surgery?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Tiny puncture incisions (4–5 mm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Minimal damage to surrounding muscles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Often discharged within 24 to 48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Guided sports physiotherapy program</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                  >
                    Schedule Arthroscopy Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Arthroscopy Patient Guidance FAQs */}
          <div className="border-t border-line pt-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Patient Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Common Questions About Keyhole Arthroscopy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {arthroscopyFaqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-2xl p-6 border border-line shadow-soft">
                  <h3 className="text-base font-bold font-heading text-charcoal mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
