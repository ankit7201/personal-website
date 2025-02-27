import { getStrapiMedia } from "@/app/util/strapi-media";
import { ProjectCard } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

export const ProjectCardPage = ({
  projectCard,
}: {
  projectCard: ProjectCard;
}) => {
  return (
    <div className="flex flex-col border-b border-gray-800 pb-8 mb-8">
      {/*title*/}
      <div className="text-white text-2xl font-bold">{projectCard.title}</div>
      {/*description*/}
      <div className="text-gray-400 max-w-2xl mt-2">
        {projectCard.description}
      </div>
      {/*tags*/}
      <div className="flex gap-2 flex-wrap mt-4">
        {projectCard.tags.split(",").map((tag) => {
          return (
            <span className="bg-gray-800 text-blue-400 text-xs rounded-full px-3 py-1">
              {tag}
            </span>
          );
        })}
      </div>

      {/*demo and source code button*/}
      <div className="flex mt-4 gap-4 text-gray-300">
        {projectCard.link.map((val) => {
          return (
            <a
              href={val.href}
              className="flex gap-2 hover:text-blue-200 items-center group"
              target="_blank"
            >
              <img src={getStrapiMedia(val.image.url) || undefined} />
              <span>{val.text}</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
