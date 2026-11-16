import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

// Larger, more detailed service cards used on the Services page.
export function ServiceList() {
  return (
    <div className="grid gap-7 lg:grid-cols-2">
      {services.map(({ icon: Icon, title, text }, i) => (
        <article
          key={title}
          className="reveal group relative flex gap-6 border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_44px_rgba(0,0,0,0.1)] sm:gap-8 sm:p-10"
        >
          <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-mist text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
            <Icon size={30} strokeWidth={1.5} />
          </span>
          <div className="min-w-0">
            <h3 className="pr-14 text-[21px] font-bold text-ink">{title}</h3>
            <p className="mt-3 text-[14px] leading-7 text-body">{text}</p>
            <a
              href={whatsappUrl(`Hello JMR Interior! I'd like a quote for ${title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-ink transition hover:text-gold"
            >
              Get a quote <ArrowRight size={14} />
            </a>
          </div>
          <span
            aria-hidden="true"
            className="text-outline pointer-events-none absolute right-8 top-6 text-[44px] font-bold leading-none"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        </article>
      ))}
    </div>
  );
}
