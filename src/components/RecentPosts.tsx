import { Blog } from "@/models/blogs/blog.model";
import { sortedBlogs } from "@/utils/blogs/sortedBlogs.utils";
import Link from "next/link";
import BlogLayoutThree from "./BlogLayoutThree";

type Props = {
  allBlogs: Blog[];
};

const RecentPosts = ({ allBlogs }: Props) => {
  const sortedAllBlogs = sortedBlogs(allBlogs);

  return (
    <section className="flex flex-col justify-center items-center w-[95%] h-auto mt-32 px-24">
      <div className="flex justify-between items-center w-full">
        <h2 className="inline-block text-4xl font-bold capitalize">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-lg font-medium text-violet-700 underline underline-offset-2"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-auto mt-10 mb-10 gap-16">
        {sortedAllBlogs.slice(4, 10).map((blog, index) => {
          return <article key={index} className="relative flex w-full h-full">
            <BlogLayoutThree blog={blog} />
          </article>;
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
