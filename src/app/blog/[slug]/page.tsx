import { getSingleBlogData } from "@/data/loaders";
import { BlogArticle } from "@/lib/types";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const getSingleBlog = async (slug: string) => {
  console.log(slug);
  const data = await getSingleBlogData(slug);
  if (!data || data.error) {
    notFound();
  }

  return data.data;
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParam = await params;
  const slug = resolvedParam.slug;

  const singleBlogDataArray: BlogArticle[] = await getSingleBlog(slug);
  if (singleBlogDataArray.length === 0) {
    notFound();
  }

  const singleBlogData = singleBlogDataArray[0];

  return (
    <div className="max-w-4xl mx-auto px-8 pt-6">
      {/*Back to all articles link*/}
      <a href="/blog">
        <div className="text-blue-400 flex items-center gap-1 mb-6">
          <ArrowLeft size={16} />
          <div>Back to all articles</div>
        </div>
      </a>

      {/*Blog content*/}
      <div>
        {/*Heading, description and metadata*/}
        <div className="flex flex-col gap-4 mb-10">
          {/*Heading*/}
          <div className="text-white text-4xl font-bold">
            {singleBlogData.title}
          </div>

          {/*Metadata*/}
          <div className="text-gray-400 flex gap-8">
            <div>{singleBlogData.publishedDate}</div>
            <div>{singleBlogData.readingTime}</div>
            <div>By {singleBlogData.author}</div>
          </div>

          {/*Description*/}
          <div className="text-gray-400">{singleBlogData.description}</div>
        </div>
        <div className="text-white">{singleBlogData.content}</div>
      </div>
    </div>
  );
}
