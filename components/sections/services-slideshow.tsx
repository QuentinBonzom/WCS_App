"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import type { Locale } from "@/lib/i18n";

const images = {
  web: "/services/web.jpg",
  apps: "/services/apps.jpg",
  design: "/services/design.jpg",
  seo: "/services/seo.jpg",
  maintenance: "/services/maintenance.jpg",
};

const copy = {
  fr: {
    eyebrow: "En un coup d'œil",
    title: "Ce que nous créons.",
    slides: [
      { id: "service-web", title: "sites web", imageUrl: images.web },
      { id: "service-apps", title: "applications", imageUrl: images.apps },
      { id: "service-design", title: "design ui/ux", imageUrl: images.design },
      { id: "service-seo", title: "référencement seo", imageUrl: images.seo },
      {
        id: "service-maintenance",
        title: "maintenance",
        imageUrl: images.maintenance,
      },
    ],
  },
  en: {
    eyebrow: "At a glance",
    title: "What we create.",
    slides: [
      { id: "service-web", title: "websites", imageUrl: images.web },
      { id: "service-apps", title: "applications", imageUrl: images.apps },
      { id: "service-design", title: "ui/ux design", imageUrl: images.design },
      { id: "service-seo", title: "seo", imageUrl: images.seo },
      {
        id: "service-maintenance",
        title: "maintenance",
        imageUrl: images.maintenance,
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    slides: Array<{ id: string; title: string; imageUrl: string }>;
  }
>;

export function ServicesSlideshow({ locale = "fr" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="bg-snow px-6 py-32" aria-hidden="true">
      <HoverSlider className="mx-auto max-w-300">
        <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
          {t.eyebrow}
        </span>
        <h2 className="mb-14 text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
          {t.title}
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col space-y-2 md:space-y-4">
            {t.slides.map((slide, index) => (
              <TextStaggerHover
                key={slide.id}
                index={index}
                className="cursor-pointer text-[clamp(28px,5vw,56px)] font-bold uppercase leading-[1.05] tracking-tighter"
                text={slide.title}
              />
            ))}
          </div>

          <HoverSliderImageWrap className="w-full max-w-md rounded-card">
            {t.slides.map((slide, index) => (
              <div key={slide.id}>
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full max-h-105 rounded-card object-cover"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>
    </section>
  );
}
