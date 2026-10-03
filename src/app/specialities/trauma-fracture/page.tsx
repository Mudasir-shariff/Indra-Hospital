import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, Activity, Clock, Phone } from "lucide-react";
import { siteData } from "@/data/site";

export const metadata = {
  title: "Trauma & Fracture Surgery | Indira Hospital Chintamani",
  description: "24/7 emergency surgical management of simple, complex, and high-energy fractures, pelvic injuries, and non-unions.",
};

export default function TraumaFracturePage() {
  const procedures = [
    {
      title: "ORIF & CRIF Internal Fixation",
      desc: "Open and closed reduction using anatomical plates, locking screws, and bio-inert implants for precise anatomical restoration of bone fragments."
    },
    {
      title: "Interlocking Intramedullary Nailing",
      desc: "Gold-standard minimally invasive rod insertion for long bone shaft fractures (femur, tibia, humerus) ensuring early weight-bearing."
    },
    {
      title: "Pelvic & Acetabular Surgery",
      desc: "Highly specialized surgical stabilization of complex pelvic ring disruptions and socket fractures resulting from vehicular or high-impact accidents."
    },
    {
      title: "External Fixation & Open Fractures",
      desc: "Emergency limb salvage protocols and damage-control external fixator placement for high-grade compound fractures with soft tissue injury."
    },
    {
      title: "Bone Grafting & Non-Union Surgery",
      desc: "Advanced biological bone grafting and revision fixation for fractures that failed to consolidate or heal with earlier treatments."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Orthopaedic Sub-Speciality"
        title="Trauma & Fracture Surgery"
        subtitle="Round-the-clock emergency surgical care for simple, complex, and high-energy polytrauma fractures using digital C-Arm guidance."
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
                24/7 Dedicated Trauma & Accident Casualty Care
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                Fractures and polytrauma emergencies demand swift clinical decisions, instant diagnostic radiography, and rapid theatre availability. At Indira Hospital, our emergency medical unit and senior orthopaedic surgeons operate 24 hours a day, 7 days a week.
              </p>
              <p className="text-base text-muted leading-relaxed font-light">
                Backed by 24/7 Digital Direct Radiography (DR) X-ray and two modern Digital C-Arm systems inside our modular theatres, we ensure accurate fragment alignment and rigid fixation with minimal soft tissue disruption.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold font-heading text-charcoal mb-4">
                  Trauma Procedures Performed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {procedures.map((proc) => (
                    <div key={proc.title} className="bg-white p-6 rounded-2xl border border-line shadow-soft">
                      <CheckCircle2 className="w-5 h-5 text-[#C03A21] mb-2" />
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
              <div className="bg-red-50/80 rounded-3xl p-8 border border-red-100 shadow-soft space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-[#C03A21] flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C03A21] block">
                  Emergency Casualty Hotline
                </span>
                <div className="text-2xl font-bold font-heading text-charcoal">
                  {siteData.contact.emergency}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Call immediately for road accident triage, emergency ambulance coordination, and urgent fracture immobilization.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${siteData.contact.emergency}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C03A21] hover:bg-red-700 text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Casualty Now
                  </a>
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
