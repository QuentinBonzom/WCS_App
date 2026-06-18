"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const SLIDES = [
  {
    id: "service-web",
    title: "sites web",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "service-apps",
    title: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "service-design",
    title: "design ui/ux",
    imageUrl:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "service-seo",
    title: "référencement seo",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "service-maintenance",
    title: "maintenance",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&w=1200&q=70",
  },
];

export function ServicesSlideshow() {
  return (
    <section className="bg-snow px-6 py-32">
      <HoverSlider className="mx-auto max-w-300">
        <span className="mb-3 block text-2xl font-semibold tracking-tight text-azure">
          Survolez pour explorer
        </span>
        <h2 className="mb-14 text-[clamp(32px,4.5vw,40px)] font-bold leading-[1.17] tracking-[-0.015em]">
          Ce que nous créons.
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col space-y-2 md:space-y-4">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.id}
                index={index}
                className="cursor-pointer text-[clamp(28px,5vw,56px)] font-bold uppercase leading-[1.05] tracking-tighter"
                text={slide.title}
              />
            ))}
          </div>

          <HoverSliderImageWrap className="w-full max-w-md rounded-card">
            {SLIDES.map((slide, index) => (
              <div key={slide.id}>
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full max-h-105 rounded-card object-cover"
                  loading="eager"
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
