import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    no: "01",
    title: "Free Consultation\n& Site Visit",
    text: "We visit your space, take measurements and listen to your ideas, budget and timeline.",
  },
  {
    no: "02",
    title: "Concept &\n3D Design",
    text: "Using those measurements we prepare layouts, mood boards and realistic 3D visuals for your approval.",
  },
  {
    no: "03",
    title: "Detailed Plan\n& Execution",
    text: "Once the design is final we handle materials, craftsmen and supervision until the handover.",
  },
];

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-cloud py-24 lg:py-28">
      {/* Blurred interior photo behind the section (scaled up so the blur has no soft edges) */}
      <Image
        src="/images/projects-11-850x520.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 scale-110 object-cover blur-md"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/35" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div>
          <SectionTitle
            align="left"
            label="How We Work"
            title="3 easy steps to your new interior"
            description="Every space is different, so we start by understanding yours — its shape, its light and the people who use it."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.no}
              className="reveal bg-white px-7 pb-9 pt-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="text-outline text-[84px] font-bold leading-none">
                {s.no}
              </p>
              <h3 className="mt-3 whitespace-pre-line text-[19px] font-bold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-body">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
