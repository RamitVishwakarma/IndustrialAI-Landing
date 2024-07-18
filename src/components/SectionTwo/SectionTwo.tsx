import React from "react";
import VideoContainer from "./VideoContainer";

const SectionTwo = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-50">
        <div className="text-slate-950 max-w-[49.5rem] mx-auto text-center font-medium py-20 lg:text-4xl lg:leading-[2.75rem] md:text-3xl md:leading-8 sm:text-2xl sm:leading-6 text-xl leading-5 -tracking-[0.04375rem] ">
          Industrial AI makes sense of your numerical and non-numerical data to
          drive better decisions.
        </div>
        <div className="pb-20 lg:pl-[13.5rem] md:pl-20 pl-10">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
