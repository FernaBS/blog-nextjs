import { formattedDateToMMMMDDYYYY } from "@/utils/dates/formattedDateToMMMMDDYYYY";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: Blog;
};

const BlogLayoutThree = ({ blog }: Props) => {
  return (
    <>
      <div className="group relative flex flex-col">
        <Link
          href={blog.url}
          className="relative w-full h-[20rem] rounded-3xl overflow-hidden"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="rounded-3xl group-hover:scale-105 transition-transform duration-500 object-cover object-center"
          />
        </Link>
        <div>
          <div className="relative flex flex-col justify-center items-center mt-3 pr-4 gap-2">
            <h3 className="inline-block w-full text-violet-700 font-medium uppercase">
              {blog.tags[0]}
            </h3>
            <Link href={blog.url}>
              <h2 className="inline-block w-full text-[1.1rem] font-medium">
                <span
                  className="bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0px_6px] 
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                >
                  {blog.title}
                </span>
              </h2>
            </Link>
            <p className="inline-block w-full ">
              {formattedDateToMMMMDDYYYY(blog.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayoutThree;
