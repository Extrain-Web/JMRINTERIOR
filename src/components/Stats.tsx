import Image from "next/image";
import { CountUp } from "./CountUp";

// PLACEHOLDER figures — replace with JMR Interior's real numbers.
const stats = [
  { value: 10, label: "Years Experience" },
  { value: 120, label: "Projects Done" },
  { value: 90, label: "Happy Clients" },
  { value: 25, label: "Team Members" },
];

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 lg:py-24">
      <Image
        src="/images/About_BG_01.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div className="reveal">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
            Quality Of Work
          </p>
          <h2 className="mt-3 max-w-xl text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[46px]">
            Milestones that we proudly accomplished &amp; lead us forward.
          </h2>
        </div>

        <dl className="reveal grid grid-cols-2">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 ${i % 2 === 1 ? "border-l border-white/25" : ""} ${
                i > 1 ? "border-t border-white/25" : ""
              }`}
            >
              <dd className="text-[44px] font-bold leading-none text-gold sm:text-[52px]">
                <CountUp to={s.value} suffix="+" />
              </dd>
              <dt className="mt-3 text-[14px] font-semibold text-white">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
