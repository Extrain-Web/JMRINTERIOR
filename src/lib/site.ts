// Phone, WhatsApp, email and address come from the JMR Interior Facebook page.
// Social links below are still PLACEHOLDERS ("#") — add the real page URLs.
export const site = {
  name: "JMR Interior",
  email: "abujahidm4@gmail.com",
  phone: "+880 1711-237118",
  phoneHref: "tel:+8801711237118",
  whatsappHref: "https://wa.me/8801711237118",
  address: "Dhaka, Bangladesh",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
} as const;

// Opens a WhatsApp chat with JMR Interior, optionally with a pre-filled message.
// All "Book Appointment" style buttons use this — there is no separate booking form.
export function whatsappUrl(message?: string) {
  return message
    ? `${site.whatsappHref}?text=${encodeURIComponent(message)}`
    : site.whatsappHref;
}

export const bookingMessage =
  "Hello JMR Interior! I'd like to book an appointment.";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
