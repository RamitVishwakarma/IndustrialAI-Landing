"use client";
import { useState, useRef } from "react";
import { dataFive, dataFour, dataOne, dataThree, dataTwo } from "./data";
import Videos from "./Videos";

const VideoContainer = () => {
  const [active, setActive] = useState<number>(0);
  const buttons = [
    "Quoting",
    "Material Planning",
    "Scheduling",
    "Reporting",
    "Pricing",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const handleCLick = (index: number) => {
    setActive(index);
    const container = containerRef.current;
    const targetVideo = videoRefs[index].current;
    // scrolling left smoothly

    if (container && targetVideo) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetVideo.getBoundingClientRect();
      const scrollLeft =
        targetRect.left - containerRect.left + container.scrollLeft;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
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
      <div
        ref={containerRef}
        className="flex gap-16 overflow-x-hidden snap-x pt-12">
        <div ref={videoRefs[0]} className="flex-none w-[82%] snap-start">
          <Videos data={dataOne} />
        </div>
        <div ref={videoRefs[1]} className="flex-none w-[82%] snap-start">
          <Videos data={dataTwo} />
        </div>
        <div ref={videoRefs[2]} className="flex-none w-[82%] snap-start">
          <Videos data={dataThree} />
        </div>
        <div ref={videoRefs[3]} className="flex-none w-[82%] snap-start">
          <Videos data={dataFour} />
        </div>
        <div ref={videoRefs[4]} className="flex-none w-[82%] snap-start">
          <Videos data={dataFive} />
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
