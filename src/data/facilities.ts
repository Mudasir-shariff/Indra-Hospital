export interface FacilityCategory {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageCaption?: string;
  items: string[];
}

export interface FacilityPhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  specs: string[];
}

export const facilityPhotos: FacilityPhoto[] = [
  {
    id: "modular-ot-1",
    title: "Modular Operation Theatre & Digital C-Arm Suite",
    category: "Advanced Surgical Facilities",
    description: "State-of-the-art modular surgical suite with laminar air flow, multi-LED surgical illumination, and Allengers Digital C-Arm fluoroscopy for real-time surgical precision during joint replacements and laser surgeries.",
    image: "/images/facilities/modular-ot-carm.jpg",
    alt: "Indira Hospital Modular Operation Theatre with Digital C-Arm",
    badge: "OT 1 • Laminar Airflow & C-Arm",
    specs: ["Laminar Airflow Ceiling", "Allengers Digital C-Arm", "Anesthesia Workstation", "Laminar Positive Pressure"]
  },
  {
    id: "modular-ot-2",
    title: "Dedicated Modular Operation Theatre 2",
    category: "Advanced Surgical Facilities",
    description: "Second fully equipped modular operation theatre featuring hermetically sealed blue air-lock doors, advanced anesthesia and gas pipeline systems, surgical instrument storage, and strict infection control protocols.",
    image: "/images/facilities/modular-ot-2.jpg",
    alt: "Indira Hospital Modular Operation Theatre 2 with Hermetic Blue Doors",
    badge: "OT 2 • Surgical Suite",
    specs: ["Hermetic Air-lock Doors", "Multi-LED Shadowless Lights", "Central Gas & Oxygen", "CSSD Sterility Compliance"]
  },
  {
    id: "digital-xray",
    title: "24/7 Digital Direct Radiography (DR) X-Ray",
    category: "Diagnostic & Imaging Services",
    description: "Round-the-clock digital radiography room with floating exposure table, high-frequency digital tube, and vertical chest bucky stand for rapid, ultra-low dose fracture and thoracic diagnosis.",
    image: "/images/facilities/digital-xray.jpg",
    alt: "24/7 Digital Direct Radiography DR X-Ray Facility at Indira Hospital",
    badge: "24/7 Digital DR X-Ray",
    specs: ["Direct Radiography (DR)", "Low-Dose Radiation", "Floating Exposure Table", "Instant Digital Reports"]
  },
  {
    id: "recovery-ward",
    title: "Post-Operative Recovery & Monitoring Ward",
    category: "Emergency & Patient Care",
    description: "High-dependency recovery suite equipped with wall-mounted multi-parameter vital signs monitors, individual cubicle privacy curtains, central oxygen ports, and 24/7 dedicated nursing observation.",
    image: "/images/facilities/recovery-monitoring-ward.jpg",
    alt: "Post-Operative Recovery Ward with Multi-Parameter Digital Vital Monitors",
    badge: "Continuous Monitoring",
    specs: ["Multi-Parameter Vital Monitors", "Privacy Separation Curtains", "Central Vacuum & O2", "Climate Controlled (AC)"]
  },
  {
    id: "general-ward",
    title: "Inpatient General Ward",
    category: "Hospital Infrastructure",
    description: "Clean, spacious, well-ventilated 30-bed inpatient care ward with modern multi-function hospital beds, bedside lockers, IV stands, and round-the-clock nurse care.",
    image: "/images/facilities/general-ward.jpg",
    alt: "Clean and Spacious Inpatient General Ward at Indira Hospital",
    badge: "30-Bed Inpatient Care",
    specs: ["Multi-Position Hospital Beds", "Bedside Medical Lockers", "High Infection Control", "Spacious Natural Airflow"]
  },
  {
    id: "physiotherapy-centre",
    title: "Physiotherapy & Rehabilitation Centre",
    category: "Rehabilitation & Support",
    description: "In-house physical therapy unit equipped with computerized traction therapy (MOBILUX-5 TRAC) and electrotherapy equipment, guiding joint replacement and fracture patients towards painless, independent mobility.",
    image: "/images/facilities/physiotherapy-rehab.jpg",
    alt: "Physiotherapy and Rehabilitation Centre with Motorized Traction Table",
    badge: "Mobility & Recovery",
    specs: ["MOBILUX-5 Computerized Traction", "Electrotherapy Modalities", "Targeted Joint Rehab", "Supervised Physical Therapy"]
  },
  {
    id: "in-house-pharmacy",
    title: "24/7 In-House Pharmacy (ಇಂದಿರ ಫಾರ್ಮಸಿ)",
    category: "Rehabilitation & Support",
    description: "Fully stocked on-premise pharmacy dispensing genuine prescription pharmaceuticals, critical care medications, surgical consumables, and post-discharge recovery kits 24 hours a day.",
    image: "/images/facilities/in-house-pharmacy.jpg",
    alt: "Indira Pharmacy - In-House 24/7 Pharmacy at Indira Hospital",
    badge: "24/7 In-House Pharmacy",
    specs: ["Full Surgical Inventory", "Emergency Medication Stock", "Genuine Formulations", "24/7 Service"]
  },
  {
    id: "hospital-reception",
    title: "Hospital Reception & Patient Helpdesk",
    category: "Hospital Infrastructure",
    description: "Welcoming, modern reception counter for outpatient consultations, inpatient admissions, government healthcare schemes, and cashless medical insurance assistance.",
    image: "/images/facilities/hospital-reception.jpg",
    alt: "Indira Hospital Main Reception Desk and Help Counter",
    badge: "Reception & Admissions",
    specs: ["OPD/IPD Registration", "Cashless Desk Coordination", "Wheelchair Assistance", "Dedicated Reception Staff"]
  }
];

export const facilitiesData: FacilityCategory[] = [
  {
    title: "Hospital Infrastructure",
    description: "Modern healthcare environment planned for maximum clinical safety and patient comfort.",
    badge: "30-Bed Inpatient Care",
    image: "/images/facilities/general-ward.jpg",
    imageAlt: "Indira Hospital 30-bed Inpatient General Ward",
    imageCaption: "Spacious, hygienic 30-bed inpatient general ward with modern hospital beds and 24/7 nurse call support",
    secondaryImage: "/images/facilities/hospital-reception.jpg",
    secondaryImageAlt: "Indira Hospital Reception Counter and Patient Help Desk",
    secondaryImageCaption: "Central hospital reception and patient registration counter providing immediate outpatient and admission assistance",
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
    badge: "2 Modular OTs",
    image: "/images/facilities/modular-ot-carm.jpg",
    imageAlt: "Indira Hospital Advanced Modular Operation Theatre with Digital C-Arm System",
    imageCaption: "Modular OT 1 equipped with laminar airflow, digital surgical lights, anesthesia station & Allengers Digital C-Arm",
    secondaryImage: "/images/facilities/modular-ot-2.jpg",
    secondaryImageAlt: "Indira Hospital Modular Operation Theatre 2 (OT-2) Suite",
    secondaryImageCaption: "Modular OT 2 featuring hermetically sealed doors, multi-LED surgical lights, and advanced infection control",
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
    badge: "24/7 Digital DR X-Ray & C-Arm",
    image: "/images/facilities/digital-xray.jpg",
    imageAlt: "24/7 Digital Direct Radiography DR X-Ray Machine and Table at Indira Hospital",
    imageCaption: "24/7 Digital Direct Radiography (DR) X-Ray unit with floating table providing instantaneous high-definition imaging",
    secondaryImage: "/images/facilities/modular-ot-carm.jpg",
    secondaryImageAlt: "Two Digital C-Arm fluoroscopic systems for intraoperative imaging",
    secondaryImageCaption: "Digital C-Arm fluoroscopic systems providing real-time intraoperative visualization for joint and stone surgeries",
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
    badge: "24/7 Trauma & Continuous Monitoring",
    image: "/images/facilities/recovery-monitoring-ward.jpg",
    imageAlt: "Indira Hospital Inpatient Post-Operative Recovery and Monitoring Ward",
    imageCaption: "Post-operative recovery ward with multi-parameter digital monitors, central oxygen, and privacy cubicles",
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
    badge: "Rehab & In-House Pharmacy",
    image: "/images/facilities/physiotherapy-rehab.jpg",
    imageAlt: "Indira Hospital Physiotherapy and Rehabilitation Centre with Motorized Traction",
    imageCaption: "Dedicated Physiotherapy & Rehab Centre featuring MOBILUX-5 motorized traction and targeted mobility therapies",
    secondaryImage: "/images/facilities/in-house-pharmacy.jpg",
    secondaryImageAlt: "Indira Pharmacy - In-House 24/7 Pharmacy at Indira Hospital",
    secondaryImageCaption: "24/7 In-House Indira Pharmacy stocked with genuine surgical consumables, emergency drugs, and prescribed medications",
    items: [
      "Physiotherapy & Rehabilitation Centre equipped for post-op mobility and joint strengthening",
      "Well-stocked In-House Pharmacy for immediate access to prescribed medications",
      "Patient counselling, nutritional guidance, and detailed post-discharge care protocols",
      "Seamless care coordination from initial registration through long-term follow-up"
    ]
  }
];
