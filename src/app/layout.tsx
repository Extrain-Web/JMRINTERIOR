import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jmr.a4447e1f.sslip.io";
const siteDescription =
  "JMR Interior designs beautiful, functional homes and workspaces — from first consultation to final handover.";

export const metadata: Metadata = {
  // Needed so the share image (opengraph-image.png) gets an absolute URL.
  metadataBase: new URL(siteUrl),
  title: {
    default: "JMR Interior | Interior Design & Decoration",
    template: "%s | JMR Interior",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "JMR Interior",
    title: "JMR Interior | Interior Design & Decoration",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JMR Interior | Interior Design & Decoration",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
