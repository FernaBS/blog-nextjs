import Image from "next/image";
import React from "react";
import profileCharacter from "./../../project files/character.png";

const AboutCoverSection = () => {
  return (
    <section className="relative flex justify-center items-center w-full h-[75vh] border-solid border-black border-b-2">
      <div className="relative flex flex-col justify-center items-center w-1/2 h-[100%] border-r-2 border-solid border-black">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-1/2 h-auto p-15">
        <h1 className="text-6xl font-bold text-black">
          Dream Big, Work Hard, Achieve More!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
