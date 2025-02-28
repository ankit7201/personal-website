import { BlogCard } from "@/components/BlogCard";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-8 pt-6">
      {/*Heading and Description*/}
      <div className="flex flex-col gap-4 mb-10">
        <div className="text-white font-bold text-4xl">Blog</div>
        <div className="text-gray-400 text-lg">
          Thoughts on development and technology
        </div>
      </div>

      {/*Blog Cards*/}
      <div className="flex flex-col gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
