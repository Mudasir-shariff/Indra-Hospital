import React from "react";
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

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
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
