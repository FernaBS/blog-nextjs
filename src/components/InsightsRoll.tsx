import React from "react";

const InsightsRoll = ({ insights }) => {
  return (
    <div className="w-full bg-violet-500 text-white whitespace-nowrap overflow-hidden">
      <div className="w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base animate-roll">
        {insights.map((text, index) => (
          <div key={index}> 
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsRoll;
