export interface FacilityCategory {
  title: string;
  description: string;
  items: string[];
}

export const facilitiesData: FacilityCategory[] = [
  {
    title: "Hospital Infrastructure",
    description: "Modern healthcare environment planned for maximum clinical safety and patient comfort.",
    items: [
      "30-Bed Super Speciality & Multispeciality Hospital with modern patient care amenities",
      "Central Oxygen & Vacuum Suction System available across all patient care zones",
      "Four dedicated spacious Outpatient (OPD) & Inpatient (IPD) facilities",
      "Well-equipped General Wards and comfortable Private Patient Rooms",
      "Four dedicated Consultant Consultation Rooms for speciality privacy",
      "Spacious, climate-friendly patient and attendant waiting lounges",
      "Wheelchair and stretcher-friendly accessibility throughout the hospital premises",
      "Adequate on-premise parking facilities for patients and visitors"
    ]
  },
  {
    title: "Advanced Surgical Facilities",
    description: "Surgical theatres engineered to meet rigorous sterility and technological benchmarks.",
    items: [
      "Two Advanced Modular Operation Theatres with laminar airflow for major joint and urology surgeries",
      "Dedicated Minor Operation Theatre for day-care and minor orthopaedic/urological procedures",
      "Advanced surgical instrumentation supporting complex Orthopaedic and laser Urology surgeries",
      "Modern CSSD sterilization facilities adhering to strict infection prevention and control standards",
      "Ergonomic surgical environment ensuring patient safety during prolonged surgical interventions"
    ]
  },
  {
    title: "Diagnostic & Imaging Services",
    description: "Round-the-clock precision diagnostics empowering fast clinical decision making.",
    items: [
      "Two Digital C-Arm Imaging Systems for real-time, high-precision intraoperative visualization",
      "24/7 Digital Direct Radiography (DR) X-Ray facility with instant high-resolution imaging",
      "Comprehensive In-house Clinical Laboratory Services for rapid blood, biochemical, and fluid testing",
      "Continuous diagnostic support for both emergency trauma and elective surgical monitoring"
    ]
  },
  {
    title: "Emergency & Patient Care Services",
    description: "24/7 casualty readiness with dedicated trauma and urological acute response.",
    items: [
      "24/7 Emergency & Casualty Services with round-the-clock emergency medical staff",
      "Dedicated 24/7 Orthopaedic and Urology Acute Emergency care teams",
      "Rapid response crash cart and critical stabilization support",
      "Experienced nursing team delivering continuous vital sign and recovery monitoring"
    ]
  },
  {
    title: "Rehabilitation & Support Services",
    description: "Integrated post-surgical care ensuring patients regain strength and independence swiftly.",
    items: [
      "Physiotherapy & Rehabilitation Centre equipped for post-op mobility and joint strengthening",
      "Well-stocked In-House Pharmacy for immediate access to prescribed medications",
      "Patient counselling, nutritional guidance, and detailed post-discharge care protocols",
      "Seamless care coordination from initial registration through long-term follow-up"
    ]
  }
];
