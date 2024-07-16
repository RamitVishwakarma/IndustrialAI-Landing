"use client";
import { useState } from "react";

const VideoContainer = () => {
  const [active, setActive] = useState<number>(0);
  const buttons = [
    "Quoting",
    "Material Planning",
    "Scheduling",
    "Reporting",
    "Pricing",
  ];

  const handleCLick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <div className="flex items-center gap-6 border-b border-border-color w-fit mx-auto">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleCLick(index)}
            className={`${
              active === index
                ? "text-slate-950 font-medium text-base leading-6 tracking-[-0.0125rem] decoration-cyan-300 decoration-solid decoration-2 underline underline-offset-[0.92rem]"
                : "text-slate-500 font-medium text-base leading-6 tracking-[-0.0125rem] "
            } py-[0.62rem] `}>
            <span>{button}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
