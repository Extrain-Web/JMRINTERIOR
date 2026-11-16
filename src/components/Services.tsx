import Link from "next/link";
import { services } from "@/lib/services";
import { SectionTitle } from "./SectionTitle";

export function Services() {
  return (
    <section id="services" className="bg-mist py-24 lg:py-28">
      <div className="container-x">
        <SectionTitle
          label="Our Services"
          title="Everything your space needs, under one roof"
          description="We handle every stage of your interior project, so there is one team to talk to and one standard of quality throughout."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <Link
              key={title}
              href="/services"
              className="reveal group block bg-white px-8 py-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.1)]"
            >
              <span className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full bg-mist text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                <Icon size={32} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 text-[19px] font-bold text-ink">{title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-body">{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
