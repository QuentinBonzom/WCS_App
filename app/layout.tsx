import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-chrome";
import { Footer } from "@/components/footer";
import { HtmlLang } from "@/components/html-lang";
import { JsonLd } from "@/components/json-ld";
import { ScrollProgress } from "@/components/motion-primitives";
import {
  absoluteUrl,
  baseJsonLd,
  buildPageMetadata,
  seoPages,
  siteConfig,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${seoPages.home.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  classification: "Agence web, développement web, application mobile, SEO",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      fr: absoluteUrl("/"),
      "x-default": absoluteUrl("/"),
    },
  },
  openGraph: {
    ...buildPageMetadata(seoPages.home).openGraph,
    url: absoluteUrl("/"),
  },
  twitter: buildPageMetadata(seoPages.home).twitter,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        <HtmlLang />
        <ScrollProgress />
        <JsonLd data={baseJsonLd()} />
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
