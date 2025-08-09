import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallow = process.env.DISALLOW_INDEXING === "true";
  if (disallow) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }] };
}
