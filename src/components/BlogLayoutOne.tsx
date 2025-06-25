import { Blog } from "@/models/blogs/blog.model";
import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";
import { slug } from "github-slugger";

type Props = {
  blog: Blog;
};

const BlogLayoutOne = ({ blog }: Props) => {
  return (
    <>
      <div className="group relative flex w-full h-full overflow-hidden rounded-3xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="w-full rounded-3xl -z-10 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 left-15 z-0 flex flex-col justify-center items-start gap-5 w-[80%] h-auto">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url}>
            <h1 className="text-2xl font-medium text-white capitalize">
              <span
                className="bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0px_6px]
                            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.title}
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogLayoutOne;
