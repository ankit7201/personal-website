import { BlogCard } from "@/components/BlogCard";
import { getBlogArticlesData, getBlogHomePageData } from "@/data/loaders";
import { BlogArticle, BlogHomePage } from "@/lib/types";
import { notFound } from "next/navigation";

const getBlogHomePage = async () => {
  const data = await getBlogHomePageData();
  if (!data || data.error) {
    notFound();
  }

  return data.data;
};

const getBlogArticles = async () => {
  const data = await getBlogArticlesData();
  if (!data || data.error) {
    notFound();
  }

  return data.data;
};

export default async function Blog() {
  const blogHomePageData: BlogHomePage = await getBlogHomePage();
  const blogArticlesData: BlogArticle[] = await getBlogArticles();

  return (
    <div className="max-w-4xl mx-auto px-8 pt-6">
      {/*Heading and Description*/}
      <div className="flex flex-col gap-4 mb-10">
        <div className="text-white font-bold text-4xl">
          {blogHomePageData.heading}
        </div>
        <div className="text-gray-400 text-lg">
          {blogHomePageData.description}
        </div>
      </div>

      {/*Blog Cards*/}
      <div className="flex flex-col gap-5">
        {blogArticlesData.map((blogArticle) => {
          return <BlogCard blogArticleData={blogArticle} />;
        })}
      </div>
    </div>
  );
}
