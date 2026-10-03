import { Metadata } from "next";
import { buildMeta, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Contact Indira Hospital, Chintamani | Address & Phone",
  description: "Contact Indira Hospital in Chintamani: Ram Mandir Road, N.R. Extension. Call +91 79961 14271 (OPD) or 08154-405616 (24/7 Casualty). WhatsApp booking available.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
