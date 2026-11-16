import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { homeProjects } from "@/lib/projects";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="relative isolate overflow-hidden bg-ink py-24 lg:py-28">
      <Image
        src="/images/h1-bg02.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
        aria-hidden="true"
      />

      <div className="container-x">
        <SectionTitle
          light
          label="Our Projects"
          title="Explore our interior designs"
          description="Browse finished spaces from some of our clients and see how they turned a plan into a place they love — then get ideas for your own."
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((p) => (
            <article key={p.title} className="reveal group">
              <Link href="/projects" className="block" aria-label={`View ${p.title}`}>
                <div className="relative aspect-[850/520] overflow-hidden bg-ink-deep">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white">
                      <Plus size={24} />
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-center text-[22px] font-semibold text-white transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-white/65">
                  {p.tags.join(" / ")}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
