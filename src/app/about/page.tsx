import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageBanner } from "@/components/PageBanner";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the JMR Interior team — creative solutions by professional designers.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <About />
      <Stats />
      <Team />
      <Testimonials />
    </>
  );
}
