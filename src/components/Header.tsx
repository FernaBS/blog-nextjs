import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import LinkedIn from "./social icons/LinkedIn";
import Facebook from "./social icons/Facebook";
import Instagram from "./social icons/Instagram";
import X from "./social icons/X";

const Header = () => {
  return (
    <header className="w-full h-[5rem] p-4 px-8 flex flex-row items-center justify-between">
      <div className="flex items-center justify-center">
        <Logo />
        <span className="ml-2 text-lg font-semibold">CodeBucks</span>
      </div>
      <nav
        className="fixed flex justify-between items-center w-60 h-auto p-3 z-10 right-1/2 translate-x-1/2 bg-white border border-solid
       border-black rounded-full font-medium capitalize"
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <ModeToggle />
      </nav>
      <div className="flex items-center justify-center gap-3">
        <a
          className="hover:scale-125 transition-transform ease duration-200"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <LinkedIn witdh="2rem" height="2rem" />
        </a>
        <a
          className="hover:scale-125 transition-transform ease duration-200"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <Facebook witdh="2rem" height="2rem" />
        </a>
        <a
          className="hover:scale-125 transition-transform ease duration-200"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <Instagram witdh="2rem" height="2rem" />
        </a>
        <a
          className="hover:scale-125 transition-all ease duration-200"
          href="https://www.x.com/"
          target="_blank"
        >
          <X witdh="2rem" height="2rem" />
        </a>
      </div>
    </header>
  );
};

export default Header;
