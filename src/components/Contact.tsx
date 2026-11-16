import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

// `compact` hides the contact-details row (the Contact page shows it as cards instead).
export function Contact({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className="overflow-hidden bg-white py-24 lg:py-28">
      <div className="container-x grid items-center gap-20 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="relative aspect-[945/600] w-full overflow-hidden">
            <Image
              src="/images/h1-banner1.jpg"
              alt="Bright, modern white kitchen with a timber canopy and black accents"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          {/* Guarantee badge — placeholder claim, confirm before launch */}
          <div className="absolute -bottom-12 right-6 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-gold text-center text-white shadow-xl sm:right-12">
            <div className="absolute inset-[7px] rounded-full border border-dashed border-white/80" />
            <div>
              <p className="text-[44px] font-bold leading-none">5</p>
              <p className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide">
                Years<br />Guarantee
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
            Get Free Quote
          </p>
          <h2 className="mt-3 max-w-md text-[32px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[40px] lg:text-[46px]">
            Schedule a free designer consultation
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-7 text-body">
            Tap the button below to chat with us directly on WhatsApp.
          </p>
          <a
            href={whatsappUrl("Hello JMR Interior! I'd like a free design consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-ink px-9 text-[12px] font-bold uppercase tracking-wider text-white transition hover:bg-gold"
          >
            Chat on WhatsApp <MessageCircle size={16} />
          </a>

          {!compact && (
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-black/10 pt-7 text-[14px]">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-ink transition hover:text-gold">
                <Mail size={18} className="text-gold" /> {site.email}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-3 text-ink transition hover:text-gold">
                <Phone size={18} className="text-gold" /> {site.phone}
              </a>
              <p className="flex items-center gap-3 text-ink">
                <MapPin size={18} className="text-gold" /> {site.address}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
