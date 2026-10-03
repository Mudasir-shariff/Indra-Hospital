export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Daily OPD",
    href: "/#specialities",
    children: [
      { label: "Orthopaedics (Daily OPD)", href: "/specialities/orthopaedics", desc: "Bone, joint & trauma care" },
      { label: "Urology (Daily OPD)", href: "/specialities/urology", desc: "Laser stone & prostate surgery" },
      { label: "General Medicine (Daily OPD)", href: "/#specialities", desc: "Primary care, diabetes & hypertension" }
    ]
  },
  {
    label: "Specialities",
    href: "/#specialities",
    children: [
      { label: "All Specialities & OPD", href: "/#specialities", desc: "Daily OPD & appointment clinics" },
      { label: "Orthopaedic Surgeries", href: "/specialities/orthopaedics", desc: "Joints, fractures & spine" },
      { label: "Urology Surgeries", href: "/specialities/urology", desc: "Laser stones & endourology" },
      { label: "Nephrology (Appointment)", href: "/#specialities", desc: "Renal care & CKD management" },
      { label: "Dermatology (Appointment)", href: "/#specialities", desc: "Skin, hair & allergy clinics" },
      { label: "Visiting Specialists", href: "/doctors", desc: "Gastro, Neuro, Plastic, OMFS & Gynaec" }
    ]
  },
  { label: "Specialists", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  {
    label: "Patient Care",
    href: "/patient-info",
    children: [
      { label: "Patient Guide & OPD Hours", href: "/patient-info", desc: "OPD timings, admission & visiting hours" },
      { label: "Insurance & Cashless TPA", href: "/insurance", desc: "Cashless hospitalization & reimbursement" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export const all15Pages = [
  { id: 1, title: "Home", href: "/", category: "Core" },
  { id: 2, title: "About Us", href: "/about", category: "Core" },
  { id: 3, title: "Orthopaedic Surgeries", href: "/specialities/orthopaedics", category: "Specialities" },
  { id: 4, title: "Joint Replacement Surgery", href: "/specialities/joint-replacement", category: "Specialities" },
  { id: 5, title: "Trauma & Fracture Surgery", href: "/specialities/trauma-fracture", category: "Specialities" },
  { id: 6, title: "Arthroscopic Keyhole Surgery", href: "/specialities/arthroscopy", category: "Specialities" },
  { id: 7, title: "Spine Surgery", href: "/specialities/spine-surgery", category: "Specialities" },
  { id: 8, title: "Urology Surgeries", href: "/specialities/urology", category: "Specialities" },
  { id: 9, title: "Kidney Stone Surgery", href: "/specialities/kidney-stones", category: "Specialities" },
  { id: 10, title: "Prostate Surgery", href: "/specialities/prostate-surgery", category: "Specialities" },
  { id: 11, title: "Our Doctors & Specialists", href: "/doctors", category: "Medical Team" },
  { id: 12, title: "Facilities & Infrastructure", href: "/facilities", category: "Hospital" },
  { id: 13, title: "Patient Information & OPD", href: "/patient-info", category: "Patients" },
  { id: 14, title: "Insurance & Cashless TPA", href: "/insurance", category: "Patients" },
  { id: 15, title: "Contact & Appointments", href: "/contact", category: "Contact" }
];
