import React from "react";

const Skill = ({ name }) => {
  return (
    <div
      className="py-5 px-14 border-2 border-black border-solid font-semibold text-black bg-white text-2xl text-center rounded
       capitalize mr-6 mb-6 hover:scale-105 transition-transform ease-in-out duration-200 cursor-pointer"
    >
      {name}
    </div>
  );
};

export default Skill;
