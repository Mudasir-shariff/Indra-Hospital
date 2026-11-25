import { Metadata } from "next";
import { siteData } from "@/data/site";
import { doctorsData } from "@/data/doctors";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indirahospital.in";

export interface MetaInput {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}

export function buildMeta({
  title,
  description,
  path = "",
  noIndex = false,
  image = "/images/indira-hospital-building.jpg",
}: MetaInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = title.toLowerCase().includes("indira hospital")
    ? title
    : `${title} | Indira Hospital, Chintamani`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
      },
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "Indira Hospital — Super Speciality & Multispeciality Hospital, Chintamani",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${title} — Indira Hospital, Chintamani`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
    },
  };
}

/**
 * WebSite Schema for Homepage
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Indira Hospital, Chintamani",
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#hospital`,
    },
  };
}

/**
 * WebPage Schema for standard pages
 */
export function getWebPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}/#webpage`,
    name,
    url,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#hospital`,
    },
  };
}

/**
 * FAQPage Schema for medically responsible patient education Q&As
 */
export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Homepage JSON-LD Schema:
 * Hospital + MedicalOrganization
 */
export function getHospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization"],
    "@id": `${SITE_URL}/#hospital`,
    name: "Indira Hospital",
    alternateName: [
      "INDIRA HOSPITAL",
      "Indira Hospital Chintamani",
      "Indira Hospital — Super Speciality & Multispeciality Hospital",
      "Indira Super Speciality & Multispeciality Hospital",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/brand/indira-logo.jpg`,
    },
    image: `${SITE_URL}/images/indira-hospital-building.jpg`,
    description: siteData.shortDescription,
    foundingDate: "1998",
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Health Insurance (TPA)",
    isAccessibleForFree: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.contact.address,
      addressLocality: "Chintamani",
      addressRegion: "Karnataka",
      postalCode: "563125",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.402,
      longitude: 78.055,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Chintamani",
      },
      {
        "@type": "AdministrativeArea",
        name: "Chikkaballapur District, Karnataka",
      },
    ],
    hasMap: siteData.contact.mapsUrl,
    sameAs: [
      siteData.social.instagram,
      siteData.social.facebook,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteData.contact.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteData.contact.emergency,
        contactType: "emergency",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Telugu", "Hindi"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "https://schema.org/Orthopedic",
      "https://schema.org/Urologic",
      "https://schema.org/PrimaryCare",
      "https://schema.org/Renal",
      "https://schema.org/Dermatology",
      "https://schema.org/Obstetric",
      "https://schema.org/Gynecologic",
      "https://schema.org/Surgical",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Joint Replacement Surgery (TKR & THR)",
        description: "Total Knee Replacement and Total Hip Replacement surgery",
      },
      {
        "@type": "MedicalProcedure",
        name: "Trauma & Fracture Surgery",
        description: "24/7 complex fracture internal fixation and emergency trauma triage",
      },
      {
        "@type": "MedicalProcedure",
        name: "Kidney Stone Laser Surgery (RIRS / PCNL)",
        description: "Minimally invasive laser fragmentation for kidney and ureter stones",
      },
      {
        "@type": "MedicalProcedure",
        name: "Arthroscopic Keyhole Surgery",
        description: "Ligament (ACL/PCL) reconstruction and meniscus tear repair",
      },
      {
        "@type": "MedicalProcedure",
        name: "Prostate Surgery (TURP & HoLEP)",
        description: "Advanced endoscopic prostate resection and BPH management",
      },
      {
        "@type": "MedicalProcedure",
        name: "Spine Surgery",
        description: "Microdiscectomy and spinal decompression surgery",
      },
    ],
  };
}

/**
 * Speciality Page JSON-LD Schema: MedicalWebPage + MedicalProcedure
 */
export function getSpecialityJsonLd({
  name,
  description,
  path,
  procedures,
}: {
  name: string;
  description: string;
  path: string;
  procedures: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE_URL}${path}/#webpage`,
    name: `${name} in Chintamani | Indira Hospital`,
    url: `${SITE_URL}${path}`,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "MedicalSpecialty",
      name,
      description,
    },
    mainEntity: {
      "@type": "MedicalProcedure",
      name,
      procedureType: "https://schema.org/SurgicalProcedure",
      description,
      followup: "Post-operative follow-up and in-house physiotherapy at Indira Hospital, Chintamani",
      howPerformed: procedures.join(", "),
    },
  };
}

function mapDoctorSpecialty(department: string): string | string[] {
  switch (department) {
    case "Orthopaedics":
      return "https://schema.org/Orthopedic";
    case "Urology":
      return "https://schema.org/Urologic";
    case "Obstetrics & Gynaecology":
      return ["https://schema.org/Obstetric", "https://schema.org/Gynecologic"];
    case "Maxillofacial Surgery":
      return "https://schema.org/Surgical";
    default:
      return "https://schema.org/MedicalSpecialty";
  }
}

/**
 * Physician Schema for Doctor Page
 */
export function getDoctorListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: doctorsData.map((doc, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Physician",
        name: doc.name,
        jobTitle: doc.title,
        description: doc.description,
        ...(doc.image ? { image: `${SITE_URL}${doc.image}` } : {}),
        worksFor: {
          "@id": `${SITE_URL}/#hospital`,
        },
        medicalSpecialty: mapDoctorSpecialty(doc.department),
      },
    })),
  };
}

/**
 * BreadcrumbList Schema for Subpages
 */
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: it.name,
        item: `${SITE_URL}${it.path}`,
      })),
    ],
  };
}
