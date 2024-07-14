import React from "react";
import TeamContainer from "./TeamContainer";
import { DataOne, DataTwo, DataThree, DataFour } from "./data";

const SectionSeven = () => {
  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="text-slate-950 text-5xl font-medium leading-[3.5rem] tracking-[-0.0625rem]">
            We're a team of AI experts and <br /> industry veterans.
          </div>
          <div className="text-slate-500 text-xl tracking-[-0.0125rem] leading-7">
            Our team has a proven track record of delivering AI solutions <br />{" "}
            that drive tangible ROI.
          </div>
          <button className="px-3 py-[0.62rem] mt-10 border border-border-color rounded-xl">
            <span className="px-1">Contact us</span>
          </button>
        </div>
        <div className="pt-20 grid grid-cols-2 gap-6 rounded-3xl">
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