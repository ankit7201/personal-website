import { ProjectCardPage } from "@/components/ProjectCard";
import { getProjectPageData } from "@/data/loaders";
import { ProjectPage } from "@/lib/types";
import { notFound } from "next/navigation";

const projectPageDataLoader = async () => {
  const data = await getProjectPageData();
  if (!data || data.error) {
    notFound();
  }

  return data.data;
};

export default async function Projects() {
  const projectPageData: ProjectPage = await projectPageDataLoader();

  return (
    <div className="min-h-screen">
      <div className="px-8 pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col mb-12 gap-2">
            <div className="text-white font-bold text-4xl">
              {projectPageData.title}
            </div>
            <div className="text-gray-400 font-medium">
              {projectPageData.description}
            </div>
          </div>
          {projectPageData.projectCards &&
            projectPageData.projectCards.map((projectCard) => {
              return <ProjectCardPage projectCard={projectCard} />;
            })}
        </div>
      </div>
    </div>
  );
}
