import FeaturedPosts from "@/components/FeaturedPosts";
import HomeSectionCover from "@/components/HomeSectionCover";
import RecentPosts from "@/components/RecentPosts";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-auto">
      <HomeSectionCover allBlogs={allBlogs} />
      <FeaturedPosts allBlogs={allBlogs} />
      <RecentPosts allBlogs={allBlogs} />
    </main>
  );
}
