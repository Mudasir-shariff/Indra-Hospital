import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/specialities/orthopaedics", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/joint-replacement", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/trauma-fracture", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/arthroscopy", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/spine-surgery", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/urology", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/kidney-stones", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/specialities/prostate-surgery", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/doctors", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/facilities", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/patient-info", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
