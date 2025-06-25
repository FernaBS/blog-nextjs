import BlogLayoutThree from "@/components/BlogLayoutThree";
import Categories from "@/components/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const category = await params;
  console.log("category:", category.slug);

  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      let filter = false;
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (category.slug === "all") {
        filter = true;
      } else if (slugified === category.slug) {
        filter = true;
      }

      return filter;
    });
  });

  return (
    <main className="flex flex-col justify-center items-center h-auto">
      <article className="relative flex flex-col justify-center items-center w-full">
        <div className="relative flex flex-col justify-center items-start w-[80vw] pt-20">
          <h1 className="text-4xl font-bold text-center mb-4">
            {`#${category.slug}`}
          </h1>
          <span>Discover more categories and expand your knowledge!</span>
        </div>
        <Categories
          allCategories={allCategories}
          categorySlug={category.slug}
        />
        <div className="relative grid grid-cols-3 gap-8 w-[90vw] mt-10">
          {blogs.map((blog, index) => (
            <BlogLayoutThree key={index} blog={blog} />
          ))}
        </div>
      </article>
    </main>
  );
};

export default CategoryPage;
