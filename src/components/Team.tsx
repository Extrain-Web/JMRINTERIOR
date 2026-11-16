import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

// PLACEHOLDER people and photos — replace with the real JMR Interior team.
const team = [
  { name: "Rafi Ahmed", role: "Lead Designer", image: "/images/avatar_01.jpg" },
  { name: "Nusrat Jahan", role: "Interior Architect", image: "/images/avatar_02.jpg" },
  { name: "Tanvir Hasan", role: "Project Manager", image: "/images/avatar_03.jpg" },
  { name: "Maya Rahman", role: "3D Visualizer", image: "/images/avatar_04.jpg" },
];

export function Team() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container-x">
        <SectionTitle
          label="Meet Our Team"
          title="Creative minds that sweat the details"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="reveal group text-center">
              <div className="relative aspect-[300/420] overflow-hidden bg-cloud">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(min-width: 1024px) 290px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-ink">{m.name}</h3>
              <p className="mt-1 text-[13px] text-body/80">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
