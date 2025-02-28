import { ArrowRight, Calendar, Clock } from "lucide-react";

export const BlogCard = () => {
  return (
    <div>
      <div className="rounded-lg bg-gray-800">
        <div className="px-4 py-2">
          {/*Article metadata like data and reading time*/}
          <div className="text-gray-400 flex gap-6 text-xs mb-2">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <div>Feb 20, 2024</div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <div>5 min read</div>
            </div>
          </div>

          {/*Heading and Description*/}
          <div className="flex flex-col gap-2 mb-2">
            <div className="text-white font-bold text-2xl">
              Building Scalable React Applications
            </div>
            <div className="text-gray-400">
              Learn the architecture patterns and best practices for creating
              React applications that can grow with your business needs
            </div>
          </div>

          {/*Read article link*/}
          <div className="text-blue-400 flex items-center gap-2">
            <div>Read article</div>
            <div>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
