import { BlogArticle } from "@/lib/types";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const BlogCard = ({
  blogArticleData,
}: {
  blogArticleData: BlogArticle;
}) => {
  return (
    <div>
      <div className="rounded-lg bg-gray-800">
        <div className="px-4 py-2">
          {/*Article metadata like data and reading time*/}
          <div className="text-gray-400 flex gap-6 text-xs mb-2">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <div>{blogArticleData.publishedDate}</div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <div>{blogArticleData.readingTime}</div>
            </div>
          </div>

          {/*Heading and Description*/}
          <div className="flex flex-col gap-2 mb-2">
            <div className="text-white font-bold text-2xl">
              {blogArticleData.title}
            </div>
            <div className="text-gray-400">{blogArticleData.description}</div>
          </div>

          {/*Read article link*/}
          <a href={`/blog/${blogArticleData.slug}`}>
            <div className="text-blue-400 flex items-center gap-2">
              <div>Read article</div>
              <div>
                <ArrowRight size={12} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
