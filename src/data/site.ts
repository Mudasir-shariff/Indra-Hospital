export interface ContactInfo {
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  state: string;
  phone: string;
  emergency: string;
  email: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  opdHours: {
    department: string;
    morning: string;
    evening: string;
    notes?: string;
  }[];
}

export interface SiteData {
  name: string;
  descriptor: string;
  tagline: string;
  established: string;
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
  shortDescription: string;
  aboutStory: string[];
  contact: ContactInfo;
}

export const siteData: SiteData = {
  name: "Indira Hospital",
  descriptor: "Super Speciality Ortho & Urology Center",
  tagline: "Compassionate Care. Advanced Healing. Trusted Healthcare.",
  established: "1998",
  milestones: [
    {
      year: "1998",
      title: "Founding Clinic",
      description: "Established as a dedicated outpatient clinic in Chintamani, providing ethical and compassionate healthcare to the community."
    },
    {
      year: "2025",
      title: "Super Speciality Transformation",
      description: "Underwent a major upgrade into a modern 30-bed Super Speciality facility with two advanced modular operation theatres and digital C-Arm imaging."
    },
    {
      year: "2026",
      title: "Dedicated Urology Department",
      description: "Expanded specialized services with the launch of a comprehensive Urology department complementing well-established Orthopaedics."
    }
  ],
  shortDescription: "Indira Hospital is a premier Super Speciality Orthopaedics & Urology Center in Chintamani, Karnataka, equipped with advanced modular operation theatres, modern imaging, and experienced surgeons dedicated to restoring mobility and health.",
  aboutStory: [
    "Established in 1998 as a small clinic, Indira Hospital, Chintamani has grown steadily over the years into a trusted healthcare institution, serving the community with dedication, compassion, and integrity. Through continuous improvement and a commitment to ethical medical practices, the hospital has built a strong reputation for providing safe, reliable, and patient-centred healthcare.",
    "Driven by a vision to deliver advanced speciality care closer to home, Indira Hospital underwent a major transformation in 2025, evolving into a modern Super Speciality Healthcare Facility. The hospital was upgraded with advanced medical infrastructure, state-of-the-art modular operation theatres, improved surgical facilities, and enhanced patient care systems to provide high-quality treatment in a safe and comfortable environment.",
    "Continuing this journey of excellence, 2026 marked another important milestone with the launch of a dedicated Urology Department, expanding the hospital's speciality services while complementing its well-established Orthopaedics Department. This expansion enables patients to access comprehensive surgical and speciality care under one roof."
  ],
  contact: {
    address: "Near Park, N.R. Extension, Ram Mandir Road",
    landmark: "Near Park",
    city: "Chintamani",
    pincode: "563125",
    state: "Karnataka, India",
    phone: "+91 79961 14271",
    emergency: "08154-405616",
    email: "indirahosp@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Indira+Hospital+Chintamani+Karnataka",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.6749363162784!2d78.055!3d13.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzA3LjIiTiA3OMKwMDMnMTguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    opdHours: [
      {
        department: "Orthopaedic OPD",
        morning: "10:30 AM – 3:00 PM",
        evening: "5:30 PM – 8:30 PM",
      },
      {
        department: "Urology OPD",
        morning: "10:30 AM – 3:00 PM (Mon–Sat)",
        evening: "10:30 AM – 8:30 PM (Sunday)",
        notes: "Please confirm with reception before visit"
      }
    ]
  }
};
