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
import { buildMeta, getHospitalJsonLd, getWebSiteJsonLd, getWebPageJsonLd } from "@/lib/seo";

const homeTitle = "Indira Hospital Chintamani | Multispeciality & Orthopaedic Hospital";
const homeDescription = "Leading 30-bed hospital in Chintamani offering daily OPD in Orthopaedics, Urology & General Medicine, modular OTs, C-Arm, and 24/7 trauma care.";

export const metadata: Metadata = buildMeta({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

export default function HomePage() {
  const hospitalJsonLd = getHospitalJsonLd();
  const webSiteJsonLd = getWebSiteJsonLd();
  const webPageJsonLd = getWebPageJsonLd({
    name: homeTitle,
    description: homeDescription,
    path: "/",
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      {/* Schema.org Hospital + MedicalOrganization + WebSite + WebPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
