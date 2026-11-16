import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

// PLACEHOLDER reviews — replace with real client feedback before launch.
const testimonials = [
  {
    quote:
      "The team understood exactly what we wanted and the result is beautiful. Everything was finished on schedule and the quality of the work is outstanding.",
    name: "Joshua Keith",
    role: "Homeowner",
    image: "/images/avatar_003.png",
  },
  {
    quote:
      "From the first consultation to the last light fitting, communication was excellent. Friends keep asking who designed our home — I always recommend JMR Interior.",
    name: "Sharon Gunther",
    role: "Business owner",
    image: "/images/avatar_002.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-24 lg:py-28">
      <div className="container-x">
        <SectionTitle
          label="Our Clients"
          title="Here's what our satisfied clients are saying"
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal bg-white px-8 py-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-10"
            >
              <Quote size={26} className="text-gold" fill="currentColor" />
              <blockquote className="mt-4 text-[15px] italic leading-7 text-body">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-bold text-ink">{t.name}</p>
                  <p className="text-[12px] text-body/80">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
