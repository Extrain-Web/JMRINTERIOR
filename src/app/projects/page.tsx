import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse finished interior projects by JMR Interior.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title="Projects" />
      <section className="bg-mist py-24 lg:py-28">
        <div className="container-x">
          <SectionTitle
            label="Our Projects"
            title="Explore our interior designs"
            description="Browse finished spaces from some of our clients and see how they turned a plan into a place they love — then get ideas for your own."
          />
          <div className="mt-14">
            <ProjectGallery projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
}
