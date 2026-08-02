import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ana dizinde başka bir lockfile bulunduğu için proje kökü açıkça belirtiliyor.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
