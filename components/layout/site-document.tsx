import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SiteNav } from "@/components/layout/site-nav";
import { Footer } from "@/components/layout/footer";
import { BaseJsonLd } from "@/components/ui/json-ld";
import { MotionProvider, ScrollProgress } from "@/components/motion";
import type { Locale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const skipLabel: Record<Locale, string> = {
  fr: "Aller au contenu",
  en: "Skip to content",
};

/**
 * The full <html>/<body> document, shared by both locale root layouts (and the
 * global not-found). `lang` is rendered server-side so crawlers and screen
 * readers get the right language on the `/en` tree.
 */
export function SiteDocument({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-azure focus:px-5 focus:py-2.5 focus:text-white"
        >
          {skipLabel[lang]}
        </a>
        <MotionProvider>
          <ScrollProgress />
          <BaseJsonLd />
          <SiteNav />
          <div id="main-content">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
