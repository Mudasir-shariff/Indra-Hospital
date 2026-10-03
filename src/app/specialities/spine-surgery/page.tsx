import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Spine Surgery | Indira Hospital Chintamani",
  description: "Comprehensive surgical treatment for spinal disorders, lumbar disc herniation, sciatica, spinal canal stenosis, and spinal stabilization.",
};

export default function SpineSurgeryPage() {
  const procedures = [
    {
      title: "Microdiscectomy",
      desc: "Microscopic surgical excision of herniated lumbar intervertebral disc fragments compressing the sciatic nerve root, offering immediate sciatica leg pain relief."
    },
    {
      title: "Laminectomy & Decompression",
      desc: "Careful removal of thickened lamina and ligamentum flavum to relieve spinal cord or nerve root compression in degenerative lumbar canal stenosis."
    },
    {
      title: "Spinal Fusion & Interbody Cages",
      desc: "Permanent stabilization of unstable motion segments using bone grafts and titanium interbody cages for spondylolisthesis and degenerative disc disease."
    },
    {
      title: "Pedicle Screw Fixation",
      desc: "Rigid intraoperative fixation using titanium pedicle screws and rods under continuous digital C-Arm guidance for spinal fractures and trauma."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Orthopaedic Sub-Speciality"
        title="Spine Surgery & Decompression"
        subtitle="Comprehensive surgical care for spinal disorders, nerve compression, disc herniations, and spinal instability with evidence-based techniques."
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
                Relieving Spinal Pain & Restoring Mobility
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                Spinal conditions such as disc herniations, spinal stenosis, and spondylolisthesis can cause debilitating back pain, leg weakness, and severe mobility limitation. Our orthopaedic and spine surgical team evaluates each case with precision diagnostics before advising surgical decompression.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Spine Procedures Performed
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
                  Clinical Expertise
                </span>
                <h3 className="text-xl font-bold font-heading text-charcoal">
                  When Is Spine Surgery Advised?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Persistent severe sciatica unresponsive to medication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Progressive muscle weakness or foot drop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Neurogenic claudication limiting walking distance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0068B0] mt-1.5 flex-shrink-0" />
                    <span>Spinal instability following trauma or fracture</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs font-semibold transition-colors"
                  >
                    Consult Spine Specialist
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
