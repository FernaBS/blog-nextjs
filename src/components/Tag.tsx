import { cx } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  name: string;
  className?: string;
};

const Tag = ({ link = "#", name, ...props }: Props) => {
  return (
    <Link
      href={link}
      className={cx(
        "flex justify-center items-center w-50 h-12 bg-black rounded-full border-2 border-solid border-white text-white capitalize",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
