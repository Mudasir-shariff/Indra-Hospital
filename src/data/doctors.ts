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
  availability: "Available on Appointment Basis";
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
  }
];

export const visitingSpecialists: VisitingSpecialist[] = [
  {
    speciality: "Nephrologist",
    scope: "Specialized clinical consultation for kidney diseases, chronic kidney disease (CKD), hypertension, and renal care.",
    schedule: "Available on Appointment Basis — Please contact reception to book",
    availability: "Available on Appointment Basis"
  },
  {
    speciality: "Dermatologist",
    scope: "Specialized clinical consultation for skin, hair, and nail disorders, acne, allergies, eczema, and dermatological conditions.",
    schedule: "Available on Appointment Basis — Please contact reception to book",
    availability: "Available on Appointment Basis"
  },
  {
    speciality: "Gastroenterologist",
    scope: "Specialized consultation for digestive system, liver, acidity, and gastrointestinal conditions.",
    schedule: "Available on Appointment Basis — Please contact reception to book",
    availability: "Available on Appointment Basis"
  },
  {
    speciality: "Neurosurgeon",
    scope: "Specialized consultation for brain, spine, nerve compression, and neurological surgical conditions.",
    schedule: "Available on Appointment Basis — Please contact reception to book",
    availability: "Available on Appointment Basis"
  },
  {
    speciality: "Plastic & Reconstructive Surgeon",
    scope: "Specialized consultation for reconstructive, post-traumatic, cosmetic, and plastic surgical care.",
    schedule: "Available on Appointment Basis — Please contact reception to book",
    availability: "Available on Appointment Basis"
  }
];
