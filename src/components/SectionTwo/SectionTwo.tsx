import React from "react";
import VideoContainer from "./VideoContainer";
import Wrapper from "../Wrapper";

const SectionTwo = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-50">
        <div className="text-slate-950 max-w-[49.5rem] leading-[2.75rem] -tracking-[0.04375rem] mx-auto text-center font-medium py-20 text-4xl">
          Industrial AI makes sense of your numerical and non-numerical data to
          drive better decisions.
        </div>
        <div className="pb-20">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
