"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import type { Project } from "@/lib/projects";

// Portfolio grid. Clicking a project opens it large in a lightbox
// (Esc closes, arrow keys / buttons move between projects).
export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const open = active !== null;

  const close = useCallback(() => {
    setActive(null);
    trigger.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + projects.length) % projects.length)),
    [projects.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, step]);

  const current = active === null ? null : projects[active];

  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`View ${p.title}`}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setActive(i);
            }}
            className="reveal group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-ink text-left"
          >
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-linear-to-t from-ink-deep/90 via-ink/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 block p-6">
              <span className="block text-[21px] font-semibold text-white">{p.title}</span>
              <span className="mt-1.5 block text-[11px] font-medium uppercase tracking-[0.12em] text-white/75">
                {p.tags.join(" / ")}
              </span>
            </span>
            <span className="absolute right-5 top-5 flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-gold text-white opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Plus size={22} />
            </span>
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/95 p-4 sm:p-10"
        >
          <button
            type="button"
            autoFocus
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-white text-ink transition hover:bg-gold hover:text-white sm:right-8 sm:top-8"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            aria-label="Previous project"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-ink transition hover:bg-gold hover:text-white sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-ink transition hover:bg-gold hover:text-white sm:right-8"
          >
            <ChevronRight size={22} />
          </button>

          <figure className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full bg-ink sm:aspect-[16/10]">
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-5 text-center">
              <p className="text-[22px] font-semibold text-white">{current.title}</p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.12em] text-white/65">
                {current.tags.join(" / ")}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
