import Image from "next/image";
import { ArrowRight, Gem, Users, Wallet } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { SectionTitle } from "./SectionTitle";

const features = [
  {
    icon: Wallet,
    title: "Fair Prices",
    text: "Clear, itemised quotes and quality work at a price that respects your budget.",
  },
  {
    icon: Gem,
    title: "Exclusive Design",
    text: "A mix of imagination, experience and professionalism is the secret of our designs.",
  },
  {
    icon: Users,
    title: "Professional Team",
    text: "A friendly, skilled and always-learning team that stays with you until handover.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white pt-24 lg:pt-28">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Overlapping photos */}
          <div className="reveal relative mx-auto h-[420px] w-full max-w-[600px] sm:h-[520px]">
            <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden">
              <Image
                src="/images/About_02.jpg"
                alt="Modern loft kitchen with a timber dining table and plants"
                fill
                sizes="(min-width: 640px) 370px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[78%] w-[70%] overflow-hidden border-[10px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/About_03.jpg"
                alt="Interior designer's finished kitchen with warm timber details"
                fill
                sizes="(min-width: 640px) 420px, 70vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <SectionTitle
              align="left"
              label="About Us"
              title="Creative solutions by professional designers"
            />
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-body">
              Your home is an expression of who you are, and its design should
              match your lifestyle. Whether you have traditional tastes or
              desire a modern feel, JMR Interior will design a space that
              suits the way you live and work — and see it through to the
              last detail.
            </p>
            <a
              href={whatsappUrl("Hello JMR Interior! I'd like to get in touch about my interior project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex h-14 items-center gap-3 rounded-full bg-ink px-8 text-[12px] font-bold uppercase tracking-wider text-white transition hover:bg-gold"
            >
              Get In Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-black/10 py-14 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal flex gap-5">
              <span className="mt-1 text-gold">
                <Icon size={44} strokeWidth={1.25} />
              </span>
              <div>
                <h3 className="text-[18px] font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[14px] leading-7 text-body">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
