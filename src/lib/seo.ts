import { Metadata } from "next";
import { siteData } from "@/data/site";
import { doctorsData } from "@/data/doctors";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indirahospital.com";

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
  image = "/images/hero-family.jpg",
}: MetaInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = title.includes("Indira Hospital") 
    ? title 
    : `${title} | Indira Hospital, Chintamani`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description: description.slice(0, 160),
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
      description: description.slice(0, 160),
      url: canonicalUrl,
      siteName: "Indira Hospital — Super Speciality Ortho & Urology Center",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${title} — Indira Hospital Chintamani`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 160),
      images: [fullImage],
    },
  };
}

/**
 * Homepage JSON-LD Schema:
 * Merged Hospital + MedicalBusiness + MedicalOrganization
 */
export function getHospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalBusiness", "MedicalOrganization"],
    "@id": `${SITE_URL}/#hospital`,
    name: "Indira Hospital",
    alternateName: [
      "Indira Hospital Chintamani",
      "Indira Super Speciality Ortho & Urology Center",
      "Indira Orthopaedic Hospital"
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/brand/indira-logo.jpg`,
    image: `${SITE_URL}/images/hero-family.jpg`,
    description: siteData.shortDescription,
    telephone: siteData.contact.phone,
    emergencyTelephone: siteData.contact.emergency,
    email: siteData.contact.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Health Insurance (TPA)",
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
    hasMap: siteData.contact.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "10:30",
        closes: "15:00",
        description: "Orthopaedic & Urology Morning OPD"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "17:30",
        closes: "20:30",
        description: "Orthopaedic Evening OPD"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:30",
        closes: "20:30",
        description: "Sunday Urology OPD"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 Emergency Casualty & Trauma Services"
      }
    ],
    medicalSpecialty: [
      "https://schema.org/Orthopedic",
      "https://schema.org/Urologic",
      "https://schema.org/Obstetric",
      "https://schema.org/Gynecologic"
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Joint Replacement Surgery (TKR & THR)",
        description: "Total Knee Replacement and Total Hip Replacement surgery"
      },
      {
        "@type": "MedicalProcedure",
        name: "Trauma & Fracture Surgery",
        description: "24/7 complex fracture internal fixation and emergency trauma triage"
      },
      {
        "@type": "MedicalProcedure",
        name: "Kidney Stone Laser Surgery (RIRS / PCNL)",
        description: "Minimally invasive laser fragmentation for kidney and ureter stones"
      },
      {
        "@type": "MedicalProcedure",
        name: "Arthroscopic Keyhole Surgery",
        description: "Ligament (ACL/PCL) reconstruction and meniscus tear repair"
      },
      {
        "@type": "MedicalProcedure",
        name: "Prostate Surgery (TURP & Laser)",
        description: "Advanced endoscopic prostate resection and BPH management"
      },
      {
        "@type": "MedicalProcedure",
        name: "Spine Surgery",
        description: "Microdiscectomy and spinal decompression surgery"
      }
    ]
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
      "@type": "WebSite",
      name: "Indira Hospital",
      url: SITE_URL
    },
    about: {
      "@type": "MedicalSpecialty",
      name,
      description
    },
    mainEntity: {
      "@type": "MedicalProcedure",
      name,
      procedureType: "https://schema.org/SurgicalProcedure",
      description,
      followup: "Post-operative follow-up and in-house physiotherapy at Indira Hospital Chintamani",
      howPerformed: procedures.join(", ")
    }
  };
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
        worksFor: {
          "@type": "Hospital",
          name: "Indira Hospital",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chintamani",
            addressRegion: "Karnataka",
            postalCode: "563125",
            addressCountry: "IN"
          }
        },
        medicalSpecialty: doc.department === "Orthopaedics" ? "https://schema.org/Orthopedic" : "https://schema.org/Urologic"
      }
    }))
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
        item: SITE_URL
      },
      ...items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: it.name,
        item: `${SITE_URL}${it.path}`
      }))
    ]
  };
}
