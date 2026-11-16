import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

// Floating "chat on WhatsApp" button, fixed to the bottom-right of every page.
// It is a plain link (no client JS): tapping it opens a WhatsApp chat with
// JMR Interior with a pre-filled greeting.
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(
        "Hello JMR Interior! I'd like to know more about your interior design services.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JMR Interior on WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 sm:right-7 sm:bottom-[max(1.75rem,env(safe-area-inset-bottom))]"
    >
      <span className="pointer-events-none hidden translate-x-3 rounded-full bg-white px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-ink opacity-0 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_-6px_rgba(37,211,102,0.65)] ring-4 ring-white/80 transition duration-300 group-hover:scale-110 group-hover:bg-[#1fbe5a] group-focus-visible:scale-110 sm:h-16 sm:w-16">
        <span aria-hidden="true" className="wa-pulse absolute inset-0 rounded-full bg-[#25d366]" />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
