import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "webcodestudio.fr",
          },
        ],
        destination: "https://www.webcodestudio.fr/:path*",
        permanent: true,
      },
      // The local landing page was consolidated under a single URL targeting
      // "création site internet Montbéliard" (its strongest query).
      {
        source: "/creation-site-web-montbeliard",
        destination: "/creation-site-internet-montbeliard",
        permanent: true,
      },
      {
        source: "/en/creation-site-web-montbeliard",
        destination: "/en/creation-site-internet-montbeliard",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
