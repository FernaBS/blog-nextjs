'use client'

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import Instagram from "./social icons/Instagram";
import Facebook from "./social icons/Facebook";
import LinkedIn from "./social icons/LinkedIn";
import X from "./social icons/X";
import { Link } from "lucide-react";

type InputProps = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit } = useForm<InputProps>();
  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <footer className="flex flex-col items-center h-90 m-10 mt-16 rounded-3xl bg-black text-white">
      <h2 className="mt-8 text-4xl font-medium text-center">
        Interesting Stories | Updates | Guides
      </h2>
      <p className="text-center text-sm my-4">
        Subscribe to learn about new tecnhnology and updates. Join over 5000+
        members community to stay up date with latest news
      </p>
      <form className="relative flex justify-center items-center w-80 h-12 p-2 mb-3 rounded-sm bg-white" onSubmit={handleSubmit(onSubmit)}>
        <input className="w-full border-b-2 border-gray-500 text-gray-500 mr-2"
          type="email"
          placeholder="Enter you email"
          {...register("email", {
            required: {
              value: true,
              message: "Debe introducir el correo",
            },
          })}
        />
        <button className="bg-black text-white p-1.5 rounded-sm" type="submit">Submit</button>
      </form>
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
      <div className="relative flex items-center justify-between w-full h-15 mt-20 px-5 border-t-2 border-gray-500">
        <span>
          © {new Date().getFullYear()} CodeBucks. All rights reserved.
        </span>
          <Link href="/sitemap.xml" className="hover:underline">
           sitemap.xml
          </Link>
          <span>
            Made with ❤️ by CodeBucks
          </span>
      </div>
    </footer>
  );
};

export default Footer;
