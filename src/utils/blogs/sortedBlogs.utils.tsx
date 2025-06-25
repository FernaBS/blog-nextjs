import { Blog } from "@/models/blogs/blog.model";
import { compareDesc, parseISO } from "date-fns";

export const sortedBlogs = (blogs: Blog[]): Blog[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO((a as Blog).publishedAt), parseISO((b as Blog).publishedAt))
    );
};
