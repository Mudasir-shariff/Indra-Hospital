import React from "react";
import { Award, Building2, HeartPulse, Clock } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Award,
      title: "Specialist Care",
      desc: "30+ years experienced orthopaedic & urology surgeons"
    },
    {
      icon: Building2,
      title: "Modern Modular Facilities",
      desc: "2 advanced modular OTs & digital C-Arm imaging"
    },
    {
      icon: HeartPulse,
      title: "Patient-Centered Care",
      desc: "Compassionate, ethical & evidence-based treatment"
    },
    {
      icon: Clock,
      title: "24/7 Casualty & Trauma",
      desc: "Round-the-clock emergency medical readiness"
    }
  ];

  return (
    <div className="bg-white border-y border-line py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x lg:divide-line">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className={`flex items-start gap-4 ${idx > 0 ? "lg:pl-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0068B0] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-heading text-charcoal">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
