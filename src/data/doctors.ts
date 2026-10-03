export interface Doctor {
  slug: string;
  name: string;
  title: string;
  department: string;
  qualifications?: string;
  experience?: string;
  description: string;
  specialization: string[];
  isLeadership?: boolean;
}

export interface VisitingSpecialist {
  speciality: string;
  scope: string;
  schedule: string;
}

export const doctorsData: Doctor[] = [
  {
    slug: "dr-venkatesh-kr",
    name: "Dr. Venkatesh K. R.",
    title: "Director & Chief Orthopaedic Surgeon",
    department: "Orthopaedics",
    experience: "30+ Years",
    isLeadership: true,
    description: "Dr. Venkatesh K. R. is a highly experienced Orthopaedic Surgeon with over 30 years of expertise in the diagnosis and surgical management of a wide range of musculoskeletal conditions. He is committed to restoring mobility, relieving pain, and improving patients' quality of life through advanced surgical techniques and individualized treatment plans.",
    specialization: [
      "Complex Trauma & Fracture Care",
      "Total Knee & Hip Joint Replacement",
      "Arthroscopic Keyhole Surgery",
      "Deformity Correction & Non-Union Surgeries"
    ]
  },
  {
    slug: "dr-shashank-ka",
    name: "Dr. Shashank K. A.",
    title: "Consultant Urologist, Andrologist & Renal Transplant Surgeon",
    department: "Urology",
    isLeadership: true,
    description: "Dr. Shashank K. A. is a Consultant Urologist, Andrologist, and Renal Transplant Surgeon providing comprehensive care for urinary tract and male reproductive disorders. He specializes in advanced medical and surgical urological treatments, with an emphasis on minimally invasive procedures, precision, and patient-focused care.",
    specialization: [
      "Minimally Invasive Laser Stone Surgery (RIRS, PCNL)",
      "Prostate Surgery (Laser & TURP)",
      "Reconstructive Urology & Stricture Surgery",
      "Andrology & Renal Transplant Care"
    ]
  },
  {
    slug: "dr-prabhu",
    name: "Dr. Prabhu",
    title: "Consultant Orthopaedic Surgeon",
    department: "Orthopaedics",
    description: "Dr. Prabhu is a Consultant Orthopaedic Surgeon with specialized expertise in Limb Lengthening and Deformity Correction. He is experienced in the evaluation and management of complex limb deformities, limb-length discrepancies, and related orthopaedic conditions. With advanced fellowship training, he focuses on individualized treatment plans and modern surgical techniques.",
    specialization: [
      "Limb Lengthening & Reconstruction",
      "Congenital & Acquired Deformity Correction",
      "Complex Fracture Management",
      "Osteotomy & Realignment Surgery"
    ]
  },
  {
    slug: "dr-bindu-v",
    name: "Dr. Bindu V.",
    title: "Consultant Obstetrician & Gynaecologist",
    department: "Obstetrics & Gynaecology",
    description: "Dr. Bindu V. is a Consultant Obstetrician & Gynaecologist providing comprehensive healthcare for women across all stages of life. She is committed to delivering safe, ethical, and compassionate care, with a focus on individualized treatment, maternal well-being, and women's reproductive health.",
    specialization: [
      "Women's Reproductive Health",
      "Maternal & Antenatal Care",
      "Gynaecological Health & Preventive Care",
      "Personalized Wellness Guidance"
    ]
  },
  {
    slug: "dr-akarsh",
    name: "Dr. Akarsh",
    title: "Consultant Oral & Maxillofacial Surgeon (OMFS)",
    department: "Maxillofacial Surgery",
    description: "Dr. Akarsh is a Consultant Oral & Maxillofacial Surgeon specializing in the diagnosis and surgical management of conditions involving the mouth, jaws, face, and associated structures. He provides comprehensive care for facial injuries, jaw conditions, oral surgical problems, and impacted teeth.",
    specialization: [
      "Facial Trauma & Jaw Fracture Surgery",
      "Maxillofacial Reconstructive Care",
      "Surgical Management of Impacted Teeth",
      "Corrective Jaw Procedures"
    ]
  },
  {
    slug: "dr-mahendra",
    name: "Dr. Mahendra",
    title: "Consultant Anaesthetist",
    department: "Anaesthesiology & Critical Care",
    description: "Dr. Mahendra provides comprehensive anaesthesia care with a focus on patient safety, comfort, and effective perioperative management.",
    specialization: ["Perioperative Anaesthesia", "Pain Management", "Patient Monitoring"]
  },
  {
    slug: "dr-sridhar",
    name: "Dr. Sridhar",
    title: "Consultant Anaesthetist",
    department: "Anaesthesiology & Critical Care",
    description: "Dr. Sridhar provides specialized anaesthesia services for surgical procedures, with emphasis on patient safety, monitoring, and perioperative care.",
    specialization: ["Advanced Surgical Anaesthesia", "Safety Protocols", "Post-operative Care"]
  },
  {
    slug: "dr-sumanth",
    name: "Dr. Sumanth",
    title: "Anaesthetist",
    department: "Anaesthesiology",
    description: "Dr. Sumanth provides professional anaesthesia care, ensuring safe and comfortable surgical experiences for patients.",
    specialization: ["Surgical Support", "Patient Safety", "Clinical Care"]
  },
  {
    slug: "dr-manasa",
    name: "Dr. Manasa",
    title: "Anaesthetist",
    department: "Anaesthesiology",
    description: "Dr. Manasa provides comprehensive anaesthesia services with a focus on patient safety and individualized care.",
    specialization: ["Anaesthesia Care", "Perioperative Safety", "Patient Comfort"]
  }
];

export const visitingSpecialists: VisitingSpecialist[] = [
  {
    speciality: "Gastroenterologist",
    scope: "Consultation for digestive system and gastrointestinal disorders.",
    schedule: "Scheduled OPD days — please contact reception for timings"
  },
  {
    speciality: "Neurosurgeon",
    scope: "Consultation for brain, spine, nerve, and related neurological surgical conditions.",
    schedule: "Scheduled OPD days — please contact reception for timings"
  },
  {
    speciality: "Plastic & Reconstructive Surgeon",
    scope: "Consultation for reconstructive, cosmetic, and plastic surgical conditions.",
    schedule: "Scheduled OPD days — please contact reception for timings"
  }
];
