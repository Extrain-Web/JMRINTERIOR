import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./icons";

const serviceLinks = [
  "Residential Interiors",
  "Office & Commercial",
  "Kitchens & Wardrobes",
  "Custom Furniture",
  "Lighting & Décor",
  "Renovation & Planning",
];

export function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-ink-deep text-white">
      <Image
        src="/images/footer_BG_01.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ink/85" />

      {/* Call to action */}
      <section className="container-x py-24 text-center lg:py-28">
        <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
          You dream it, we design it
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]">
          We can build you the space of your dreams
        </h2>
        <a
          href={whatsappUrl("Hello JMR Interior! I'd like to chat about my interior project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex h-14 items-center gap-3 rounded-full bg-gold px-9 text-[12px] font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-ink"
        >
          Schedule A Chat <MessageCircle size={16} />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-[14px] leading-7 text-white/70">
              Thoughtful interiors for homes and workplaces — designed
              around you and delivered with care.
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/75">
              <a href={site.socials.facebook} aria-label="Facebook" className="transition hover:text-gold"><FacebookIcon /></a>
              <a href={site.socials.instagram} aria-label="Instagram" className="transition hover:text-gold"><InstagramIcon /></a>
              <a href={site.socials.youtube} aria-label="YouTube" className="transition hover:text-gold"><YoutubeIcon /></a>
              <a href={site.socials.linkedin} aria-label="LinkedIn" className="transition hover:text-gold"><LinkedinIcon /></a>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold">Company</h3>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold">Services</h3>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services" className="transition hover:text-gold">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold">Contact</h3>
            <ul className="mt-5 space-y-4 text-[14px] text-white/70">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-gold">
                  <Phone size={17} className="text-gold" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-gold"
                >
                  <MessageCircle size={17} className="text-gold" /> WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all transition hover:text-gold">
                  <Mail size={17} className="shrink-0 text-gold" /> {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={17} className="shrink-0 text-gold" /> {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-[13px] text-white/70">
          © 2026 <span className="text-gold">JMR Interior</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
