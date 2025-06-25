import { sortedBlogs } from "@/utils/blogs/sortedBlogs.utils";
import { Blog } from "@/models/blogs/blog.model";
import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";
import { slug } from "github-slugger";

type Props = {
  allBlogs: Blog[];
};

const HomeSectionCover = ({ allBlogs }: Props) => {
  const sortedAllBlogs = sortedBlogs(allBlogs);
  const { title, description, image, tags, url } = sortedAllBlogs[0];

  return (
    <article className="relative flex flex-col justify-center items-center w-[95%] h-[85vh] rounded-4xl bg-gradient-to-t from-black from-0% to-transparent">
      <div className="absolute bottom-10 left-15 z-0 flex flex-col justify-center items-start gap-5 w-[60%] h-auto">
        <Tag link={`/categories/${slug(tags[0])}`} name={tags[0]} />
        <Link href={`${url}`}>
          <h1 className="text-4xl font-bold text-white capitalize cursor-pointer">
            <span
              className="bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0px_6px]
          hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {title}
            </span>
          </h1>
        </Link>
        <p className="text-lg font-medium text-white">{description}</p>
      </div>
      <Image
        src={image}
        placeholder="blur"
        blurDataURL={image}
        alt={title}
        fill
        className="w-full h-auto object-cover rounded-4xl flex flex-col items-end -z-10"
      />
    </article>
  );
};

export default HomeSectionCover;
