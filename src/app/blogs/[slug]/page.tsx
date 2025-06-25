import BlogDetails from "@/components/BlogDetails";
import RenderMDX from "@/components/RenderMDX";
import Tag from "@/components/Tag";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const slugs = await params;

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slugs.slug);
  console.log(blog)
  return (
    <>
      {blog && (
        <article>
          <div className="flex flex-col justify-center w-full h-[70vh]">
            <div className="relative w-full h-full bg-black/50">
              <Image
                src={blog.image}
                placeholder="blur"
                blurDataURL={blog.image}
                alt={blog.title}
                fill
                className="aspect-square object-cover object-center -z-10"
              />
            </div>
            <div className="absolute flex flex-col justify-center items-center w-full h-auto text-center">
              <Tag link={`/categories/${slug(blog?.tags[0])}`} name={blog?.tags[0]} />
              <h1 className="relative inline-block w-3/6 text-4xl font-bold text-white capitalize my-5 leading-normal">
                {blog?.title}
              </h1>
            </div>
          </div>
          <BlogDetails blog={blog} />

          <div className="grid grid-cols-12 gap-16 mt-5 px-10">
            <div className="col-span-4">
              <details
                className="border-[1px] border-solid border-black text-black rounded-lg p-4 sticky top-6
              max-h-[80vh] overflow-hidden overflow-y-auto"
                open
              >
                <summary className="text-lg font-semibold capitalize cursor-pointer">
                  Table of Content
                </summary>
                <ul className="mt-4 text-base">
                  {blog.toc.map((heading) => {
                    return (
                      <li className="py-1" key={`#${heading.slug}`}>
                        <a className="data-[level=two]:pl-0 data-[level=two]:pt-2
                        data-[level=two]:border-t border-solid border-black/40
                        
                        data-[level=three]:pl-6 flex items-center justify-start" href={`#${heading.slug}`} data-level={heading.level}>
                          {
                            heading.level === "three" ? <span className="flex w-1 h-1 rounded-full bg-black mr-2">&nbsp;</span> : null
                          }
                          <span className="hover:underline">
                            {heading.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </div>
            <RenderMDX blog={blog} />
          </div>
        </article>
      )}
    </>
  );
};

export default BlogPage;
