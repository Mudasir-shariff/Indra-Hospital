import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { siteData } from "@/data/site";
import { AlertTriangle, FileText, CheckCircle2, ShieldAlert, Phone } from "lucide-react";

import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Terms | Indira Hospital",
  description: "Terms and conditions of using the website and informational healthcare services of Indira Hospital Chintamani.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Legal & Terms"
        title="Terms of Use"
        subtitle="Terms and conditions governing the access and utilization of Indira Hospital's website and informational services."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-charcoal/90">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft space-y-8">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Last Updated: January 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Website Terms and Conditions
              </h2>
              <p className="text-sm text-muted mt-2 leading-relaxed font-light">
                Welcome to the official website of INDIRA HOSPITAL — Super Speciality & Multispeciality Hospital. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
              </p>
            </div>

            {/* Medical Disclaimer Banner */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Important Medical Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-light">
                The content, articles, procedural descriptions, and health information presented on this website are provided strictly for general informational and educational purposes. They do not constitute professional medical advice, clinical diagnosis, or a treatment plan. Always consult directly with our qualified orthopaedic surgeons, urologists, or specialists regarding your specific health condition.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="p-6 rounded-2xl bg-red-50 border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#C03A21] uppercase tracking-wider block">
                  Medical Emergencies & Trauma
                </span>
                <p className="text-xs sm:text-sm text-charcoal mt-0.5">
                  Do not rely on this website for acute emergencies. Call our 24/7 casualty line immediately.
                </p>
              </div>
              <a
                href={`tel:${siteData.contact.emergency}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C03A21] text-white text-xs font-semibold flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" /> Call: {siteData.contact.emergency}
              </a>
            </div>

            {/* Section 1: Appointment Requests */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                1. Appointment Scheduling & Consultation Requests
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                Submitting an appointment request through our website or WhatsApp link initiates a scheduling inquiry. Formal appointment confirmation is subject to doctor availability and will be confirmed by our reception desk personnel. Indira Hospital reserves the right to reschedule consultations based on emergency surgical duties of our consultants.
              </p>
            </div>

            {/* Section 2: Intellectual Property */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                2. Intellectual Property Rights
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                All materials on this website, including but not limited to the Indira Hospital name, logo, graphic designs, procedural content, photographs, and layout, are the exclusive property of Indira Hospital or its licensors. Reproduction, distribution, or commercial exploitation without prior written consent is strictly prohibited.
              </p>
            </div>

            {/* Section 3: Third-Party Links */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                3. Third-Party Links & Map Services
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                Our website may include links to external services such as Google Maps for hospital navigation, insurance TPA portals, or creator profiles. We do not endorse or assume responsibility for the content, privacy practices, or accuracy of third-party platforms.
              </p>
            </div>

            {/* Section 4: Limitation of Liability */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                4. Limitation of Liability
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                Indira Hospital and its clinical staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, this website or reliance on any general information contained herein.
              </p>
            </div>

            {/* Section 5: Governing Law */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                5. Governing Law & Jurisdiction
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Chintamani / Chikkaballapur District, Karnataka.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
