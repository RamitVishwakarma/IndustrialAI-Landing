import React from "react";
import TeamContainer from "./TeamContainer";
import { DataOne, DataTwo, DataThree, DataFour } from "./data";

const SectionSeven = () => {
  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="text-slate-950 max-w-[49.5rem] lg:text-5xl md:text-4xl text-3xl font-medium lg:leading-[3.5rem] tracking-[-0.0625rem]">
            We&apos;re a team of AI experts and industry veterans.
          </div>
          <div className="text-slate-500 max-w-[36.75rem] lg:text-xl text-lg tracking-[-0.0125rem] leading-7">
            Our team has a proven track record of delivering AI solutions that
            drive tangible ROI.
          </div>
          <button className="px-3 py-[0.62rem] mt-10 border border-border-color rounded-xl">
            <span className="px-1">Contact us</span>
          </button>
        </div>
        <div className="py-20 grid lg:grid-cols-2 grid-cols-1 gap-6 w-fit mx-auto ">
          <TeamContainer data={DataOne} />
          <TeamContainer data={DataTwo} />
          <TeamContainer data={DataThree} />
          <TeamContainer data={DataFour} />
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
