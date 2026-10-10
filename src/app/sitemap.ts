import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://intallo.in";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/work",
    "/services",
    "/solutions",
    "/process",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/work" || route === "/solutions" ? 0.9 : 0.8,
  }));
}
