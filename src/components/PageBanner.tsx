import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = { title: string };

// Dark banner with the page title and a breadcrumb, shown at the top of inner pages.
export function PageBanner({ title }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/breadcrumb-default-1.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="bg-blueprint absolute inset-0 -z-10 opacity-70" />

      <div className="container-x flex min-h-[260px] flex-col items-center justify-center py-16 text-center sm:min-h-[320px]">
        <h1 className="animate-fade-up text-[40px] font-bold tracking-tight sm:text-[56px]">
          {title}
        </h1>
        <span className="mt-5 block h-1 w-14 bg-gold" aria-hidden="true" />
        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75"
        >
          <Link href="/" className="transition hover:text-gold">
            Home
          </Link>
          <ChevronRight size={14} className="text-gold" />
          <span className="text-gold" aria-current="page">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
}
