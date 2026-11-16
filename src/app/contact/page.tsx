import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactInfo } from "@/components/ContactInfo";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with JMR Interior and schedule a free designer consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactInfo />
      <Contact compact />
    </>
  );
}
