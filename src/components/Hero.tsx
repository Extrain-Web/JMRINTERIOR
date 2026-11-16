"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/h1-slider02.jpg",
    alt: "Elegant dining room with a long table, grey chairs and a patterned rug",
    title: "Design a home that feels like family",
    text: "Interiors should be shaped around what truly matters — family, comfort and everyday life.",
  },
  {
    image: "/images/rev_home1_1.jpg",
    alt: "Navy blue kitchen with timber floors, pendant lights and a leafy plant",
    title: "Where bold style meets daily living",
    text: "Rich colour, honest materials and clever layouts that make every room a pleasure to use.",
  },
  {
    image: "/images/rev_home1_2.jpg",
    alt: "Bright open-plan kitchen with a marble island and navy cabinetry",
    title: "Crafted spaces, delivered with care",
    text: "From the first sketch to the final handover, we look after every detail so you don't have to.",
  },
];

const AUTOPLAY_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);

  // Restarts whenever the slide changes, so manual clicks reset the timer.
  useEffect(() => {
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(id);
  }, [index]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <section id="home" className="bg-ink text-white">
      <div className="grid min-h-[640px] lg:min-h-[min(calc(100svh-119px),780px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Text */}
        <div className="bg-blueprint relative flex items-center py-16 lg:py-0">
          <div className="w-full px-6 lg:pr-14 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
            <div key={index} className="animate-fade-up">
              <h1 className="max-w-xl text-[44px] font-bold leading-[1.08] tracking-tight sm:text-[56px] lg:text-[64px]">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-sm text-[16px] leading-7 text-white/80">
                {slide.text}
              </p>
            </div>
            <Link
              href="/projects"
              className="mt-9 inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-[12px] font-bold uppercase tracking-wider text-ink transition hover:bg-gold hover:text-white"
            >
              View Our Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Image slider */}
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-0">
          {slides.map((s, i) => (
            <Image
              key={s.image}
              src={s.image}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              preload={i === 0}
              className={`object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
            />
          ))}

          <div className="absolute bottom-0 left-0 flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex h-14 w-14 items-center justify-center bg-white text-ink transition hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex h-14 w-14 items-center justify-center bg-white text-ink transition hover:bg-gold hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
