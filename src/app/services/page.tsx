import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Process } from "@/components/Process";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceList } from "@/components/ServiceList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, kitchen and furniture design — everything your space needs from JMR Interior.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <section className="bg-mist py-24 lg:py-28">
        <div className="container-x">
          <SectionTitle
            label="Our Services"
            title="Everything your space needs, under one roof"
            description="We handle every stage of your interior project, so there is one team to talk to and one standard of quality throughout."
          />
          <div className="mt-14">
            <ServiceList />
          </div>
        </div>
      </section>
      <Process />
    </>
  );
}
