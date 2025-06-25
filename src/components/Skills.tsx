import React from "react";
import Skill from "./Skill";

const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto p-20 border-solid border-black border-b-2">
      <h2 className="relative self-start w-full text-4xl font-bold text-violet-500">I'm comfortable in...</h2>
      <div className="flex flex-wrap justify-start mt-8">
        {SkillList.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
