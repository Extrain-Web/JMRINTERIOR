"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { bookingMessage, navItems, site, whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./icons";

// Reads the real scroll position, including when the page loads already scrolled
// (e.g. a refresh halfway down), instead of waiting for the first scroll event.
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 40;
const getServerScrolled = () => false;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolled,
    getServerScrolled,
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <div className="bg-ink text-[12px] text-white/75">
        <div className="container-x flex h-11 items-center justify-between">
          <div className="hidden items-center gap-4 sm:flex">
            <a href={site.socials.facebook} aria-label="Facebook" className="transition hover:text-gold">
              <FacebookIcon />
            </a>
            <a href={site.socials.instagram} aria-label="Instagram" className="transition hover:text-gold">
              <InstagramIcon />
            </a>
            <a href={site.socials.youtube} aria-label="YouTube" className="transition hover:text-gold">
              <YoutubeIcon />
            </a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="transition hover:text-gold">
              <LinkedinIcon />
            </a>
          </div>
          <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-gold">
              <Mail size={14} /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-2 transition hover:text-gold">
              <Phone size={14} /> <span className="hidden md:inline">Call us:</span> {site.phone}
            </a>
            <a
              href={whatsappUrl(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-px hidden h-11 items-center gap-2 bg-gold px-6 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-gold-dark lg:flex"
            >
              Book Appointment <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.08)]" : "shadow-none"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between">
          <Link href="/" aria-label="JMR Interior — home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <div className="flex items-center">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block py-2 text-[13px] font-bold uppercase tracking-wide transition-colors ${
                        active ? "text-gold" : "text-ink hover:text-gold"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Appears once the top bar has scrolled away, so booking stays one tap away */}
          <a
            href={whatsappUrl(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            inert={!scrolled}
            className={`inline-flex h-10 items-center gap-2 overflow-hidden whitespace-nowrap bg-gold text-[12px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold-dark lg:h-11 ${
              scrolled
                ? "ml-3 max-w-[230px] px-4 opacity-100 lg:ml-10 lg:px-6"
                : "ml-0 max-w-0 px-0 opacity-0"
            }`}
          >
            <span className="lg:hidden">Book</span>
            <span className="hidden lg:inline">Book Appointment</span>
            <ArrowRight size={14} className="shrink-0" />
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-black/5 bg-white transition-[max-height] duration-300 lg:hidden ${
            open ? "max-h-[420px]" : "max-h-0 border-transparent"
          }`}
        >
          <ul className="container-x flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-black/5 py-3.5 text-[14px] font-bold uppercase tracking-wide ${
                    isActive(item.href) ? "text-gold" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href={whatsappUrl(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center gap-2 bg-gold px-6 text-[12px] font-bold uppercase tracking-wide text-white"
              >
                Book Appointment <ArrowRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
