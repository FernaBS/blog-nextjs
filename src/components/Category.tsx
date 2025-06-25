import clsx from "clsx";
import Link from "next/link";
import React from "react";

type CategoryProps = {
  link: string;
  name: string;
  active: boolean;
};

const Category = ({ link = "#", name, active }: CategoryProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        "py-2 px-8 border-3 border-black rounded-4xl font-semibold text-black",
        active && "bg-black text-white"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
