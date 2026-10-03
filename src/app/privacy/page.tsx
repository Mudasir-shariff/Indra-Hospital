import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { siteData } from "@/data/site";
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail } from "lucide-react";

import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: "Privacy Policy | Indira Hospital",
  description: "Privacy policy and medical confidentiality guidelines for patients and visitors of Indira Hospital Chintamani.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Legal & Compliance"
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your personal information, medical confidentiality, and patient records."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-charcoal/90">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Effective Date: January 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                Patient Privacy & Medical Data Confidentiality
              </h2>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                At Indira Hospital — Super Speciality Ortho & Urology Center, Chintamani, Karnataka, we place the highest priority on protecting the privacy, dignity, and confidentiality of our patients. This policy outlines how we collect, handle, and safeguard your medical and personal information.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0068B0]" />
                1. Information We Collect
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                When you register as an outpatient, get admitted for inpatient care, or submit an appointment request on our website, we may collect:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted space-y-1.5 pl-2 font-light">
                <li><strong>Personal Identification:</strong> Full name, age, gender, contact number, permanent address, and government identification (such as Aadhaar card or voter ID).</li>
                <li><strong>Medical & Clinical Records:</strong> Consultation notes, past surgical history, laboratory investigations, digital X-rays, C-Arm scans, and operative summaries.</li>
                <li><strong>Insurance & Billing Details:</strong> Health insurance card numbers, TPA pre-authorization documents, payment receipts, and claim records.</li>
                <li><strong>Digital Inquiries:</strong> Phone number and appointment preferences submitted through our website or WhatsApp scheduling tools.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#0068B0]" />
                2. How We Use Your Information
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                All collected information is used solely for ethical clinical and administrative functions:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted space-y-1.5 pl-2 font-light">
                <li>Delivering accurate clinical diagnosis, surgical procedures, nursing care, and emergency trauma management.</li>
                <li>Coordinating cashless hospitalization approvals and reimbursement documentation with empanelled TPAs and insurance providers.</li>
                <li>Communicating appointment confirmations, OPD schedules, and post-operative rehabilitation instructions.</li>
                <li>Fulfilling legal and statutory clinical documentation requirements as mandated by healthcare regulatory authorities in Karnataka and India.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#0068B0]" />
                3. Medical Confidentiality & Security
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                We maintain strict confidentiality standards:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted space-y-1.5 pl-2 font-light">
                <li><strong>No Commercial Sharing:</strong> We do not sell, rent, or trade patient personal information or medical histories to external marketing agencies.</li>
                <li><strong>Authorized Access Only:</strong> Access to patient medical records is strictly restricted to treating doctors, surgeons, nurses, and authorized billing personnel.</li>
                <li><strong>Secure Physical & Digital Storage:</strong> Patient files and diagnostic reports are safeguarded with administrative and technical safeguards.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0068B0]" />
                4. Patient Rights Regarding Data
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                Every patient has the right to access their clinical records. You may request copies of your discharge summary, diagnostic laboratory reports, and billing receipts at the hospital administrative reception desk upon presentation of valid identity verification.
              </p>
            </div>

            {/* Section 5: Grievances */}
            <div className="space-y-3 pt-6 border-t border-line">
              <h3 className="text-lg font-bold font-heading text-charcoal">
                5. Privacy Grievances & Contact
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                If you have questions or concerns regarding this Privacy Policy or your medical data privacy, please contact:
              </p>
              <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-line text-xs sm:text-sm space-y-1">
                <div className="font-bold text-charcoal">Administration & Medical Records Desk</div>
                <div className="text-muted">{siteData.name} — {siteData.descriptor}</div>
                <div className="text-muted">{siteData.contact.address}, {siteData.contact.city} – {siteData.contact.pincode}</div>
                <div className="text-[#0068B0] font-semibold">Phone: {siteData.contact.phone} | Email: {siteData.contact.email}</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
