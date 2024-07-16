import React from "react";
import VideoContainer from "./VideoContainer";

const SectionTwo = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-50">
        <div className="text-slate-950 text-center font-medium py-20 text-4xl">
          Industrial AI makes sense of your numerical and
          <br />
          non-numerical data to drive better decisions.
        </div>
        <div className="pb-20">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
