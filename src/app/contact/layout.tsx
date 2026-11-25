import { Metadata } from "next";
import { buildMeta, getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

const contactTitle = "Contact Indira Hospital Chintamani | Phone, Address & OPD";
const contactDesc = "Visit Indira Hospital near Municipal Park, N.R. Extension, Chintamani. Call +91 79961 14271 (OPD) or 08154-405616 (24/7 emergency).";

export const metadata: Metadata = buildMeta({
  title: contactTitle,
  description: contactDesc,
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Contact", path: "/contact" },
  ]);
  const webPageJsonLd = getWebPageJsonLd({
    name: contactTitle,
    description: contactDesc,
    path: "/contact",
    type: "ContactPage",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      {children}
    </>
  );
}
