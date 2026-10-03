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
  bookingUrl: string;
  bookingQrImage: string;
  opdHours: {
    department: string;
    morning?: string;
    evening?: string;
    timings?: string;
    status: "Daily OPD Available" | "Available on Appointment Basis" | "24/7 Available";
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
  social: {
    instagram: string;
    facebook: string;
  };
}

export const siteData: SiteData = {
  name: "Indira Hospital",
  descriptor: "SUPER SPECIALITY & MULTISPECIALITY HOSPITAL",
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
      title: "Multispeciality Expansion",
      description: "Expanded into a full-fledged Super Speciality & Multispeciality Hospital with dedicated Urology, General Medicine daily OPD, and specialized Nephrology & Dermatology care."
    }
  ],
  shortDescription: "Indira Hospital is a premier Super Speciality & Multispeciality Hospital in Chintamani, Karnataka, offering daily OPD for Orthopaedics, Urology, and General Medicine, advanced modular operation theatres, and specialist care on appointment basis.",
  aboutStory: [
    "Established in 1998 as a small clinic, Indira Hospital, Chintamani has grown steadily over the years into a trusted healthcare institution, serving the community with dedication, compassion, and integrity. Through continuous improvement and a commitment to ethical medical practices, the hospital has built a strong reputation for providing safe, reliable, and patient-centred healthcare.",
    "Driven by a vision to deliver advanced speciality care closer to home, Indira Hospital underwent a major transformation in 2025, evolving into a modern Super Speciality Healthcare Facility. The hospital was upgraded with advanced medical infrastructure, state-of-the-art modular operation theatres, improved surgical facilities, and enhanced patient care systems to provide high-quality treatment in a safe and comfortable environment.",
    "Continuing this journey of excellence, Indira Hospital proudly serves as a Super Speciality & Multispeciality Hospital, offering daily OPD for Orthopaedics, Urology, and General Medicine, alongside appointment-based specialist consultations in Nephrology, Dermatology, Gynaecology, Maxillofacial Surgery, Gastroenterology, Neurosurgery, and Plastic Surgery."
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
    bookingUrl: "https://u.tatvacare.in/r/gPbtuE",
    bookingQrImage: "/images/booking-qr.png",
    opdHours: [
      {
        department: "Orthopaedic OPD",
        morning: "10:30 AM – 3:00 PM",
        evening: "5:30 PM – 8:30 PM",
        status: "Daily OPD Available",
        notes: "Daily OPD available Monday through Saturday. 24/7 emergency casualty."
      },
      {
        department: "Urology OPD",
        morning: "10:30 AM – 3:00 PM (Mon–Sat)",
        evening: "10:30 AM – 8:30 PM (Sunday)",
        status: "Daily OPD Available",
        notes: "Daily OPD available. Laser stone & endourology consultations."
      },
      {
        department: "General Medicine OPD",
        morning: "10:30 AM – 3:00 PM",
        evening: "5:30 PM – 8:30 PM",
        status: "Daily OPD Available",
        notes: "Daily OPD available for adult primary care, diabetes & hypertension."
      },
      {
        department: "Nephrology, Dermatology & Other Specialities",
        timings: "Scheduled on Prior Appointment",
        status: "Available on Appointment Basis",
        notes: "Available on Appointment Basis — Please contact reception to book."
      }
    ]
  },
  social: {
    instagram: "https://www.instagram.com/indirahospitalcmy?stkn=ZGNrM3VlZzFhdDd3",
    facebook: "https://www.facebook.com/share/18Y5xLpxU7/",
  }
};
