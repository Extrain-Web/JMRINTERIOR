"use client";

import { useEffect, useRef } from "react";

type Props = { to: number; suffix?: string; duration?: number };

// Counts from 0 to `to` when scrolled into view. Updates the DOM directly so
// the server-rendered final number stays correct if JavaScript is unavailable.
export function CountUp({ to, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.textContent = `0${suffix}`;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let start: number | undefined;
        const tick = (now: number) => {
          start ??= now;
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${Math.round(to * eased)}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, suffix, duration]);

  return <span ref={ref}>{`${to}${suffix}`}</span>;
}
