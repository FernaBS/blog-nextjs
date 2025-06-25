"use client";

import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-xl leading-relaxed">
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your full name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg placeholder:text-center border-b-2 border-solid border-gray-300 focus:border-gray-500 bg-transparent"
      />
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        placeholder="your@email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg placeholder:text-center border-b-2 border-solid border-gray-300 focus:border-gray-500 bg-transparent"
      />
      or reach out to me on{" "}
      <input
        type="tel"
        placeholder="your number"
        {...register("mobile number", { required: true, maxLength: 12 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg placeholder:text-center border-b-2 border-solid border-gray-300 focus:border-gray-500 bg-transparent"
      />
      . Here are some details about my project
      <textarea
        placeholder="My project is about..."
        {...register("project details", {})}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg placeholder:text-left  border-b-2 border-solid border-gray-300 focus:border-gray-500 bg-transparent"
      />
      <input
        type="submit"
        value="Send Request"
        className="inline-block mt-8 py-3 px-8 border-2 border-solid border-black rounded font-medium capitalize text-xl cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
