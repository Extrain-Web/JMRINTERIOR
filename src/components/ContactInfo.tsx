import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

type Item = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const items: Item[] = [
  { icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsappHref,
    external: true,
  },
  { icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.address },
];

// Four contact cards that overlap the bottom of the page banner.
export function ContactInfo() {
  return (
    <section className="relative z-10 -mt-14 px-0">
      <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, value, href, external }) => {
          const body = (
            <>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white transition-transform duration-300 group-hover:scale-110">
                <Icon size={24} strokeWidth={1.75} />
              </span>
              <span className="mt-5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
                {label}
              </span>
              <span className="mt-2 block break-words text-[16px] font-bold text-ink">
                {value}
              </span>
            </>
          );
          const cls =
            "reveal group flex flex-col items-center bg-white px-6 py-9 text-center shadow-[0_12px_36px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1.5";
          return href ? (
            <a
              key={label}
              href={href}
              className={cls}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {body}
            </a>
          ) : (
            <div key={label} className={cls}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
