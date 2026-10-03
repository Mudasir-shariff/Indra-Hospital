import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import WhySection from "@/components/WhySection";
import DoctorsSection from "@/components/DoctorsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import JourneySection from "@/components/JourneySection";
import InsuranceSection from "@/components/InsuranceSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { buildMeta, getHospitalJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Indira Hospital | Superspeciality Orthopaedic Center, Chintamani",
  description: "Leading 30-bed Super Speciality Orthopaedic & Urology hospital in Chintamani, Karnataka. Advanced modular OTs, digital C-Arms, 24/7 trauma & joint replacement.",
  path: "/",
});

export default function HomePage() {
  const jsonLd = getHospitalJsonLd();

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      {/* Schema.org Hospital + MedicalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar isHeroFloating={true} />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <SpecialitiesSection />
      <WhySection />
      <DoctorsSection />
      <FacilitiesSection />
      <JourneySection />
      <InsuranceSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
