import React from "react";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { Blog } from "contentlayer/generated";
import Image from "next/image";

type RenderMDXProps = {
  blog: Blog;
};

const mdxComponent: MDXComponents = {
  Image: Image,
};

const RenderMDX = ({ blog }: RenderMDXProps) => {
  const MDXComponent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-8 prose prose-lg max-w-max 
    prose-blockquote:bg-violet-500/20 
    prose-blockquote:p-2 
    prose-blockquote:px-6
    prose-blockquote:border-violet-500 
    prose-blockquote:not-italic 
    prose-blockquote:rounded-r-lg
    prose-li:marker:text-violet-500
    prose-img:rounded-lg prose-img:shadow-lg">
      <MDXComponent components={mdxComponent} />
    </div>
  );
};

export default RenderMDX;
