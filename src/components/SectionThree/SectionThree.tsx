import React from "react";
import WhiteRightArrow from "../../../public/WhiteRightArrow.svg";
import Image from "next/image";

const SectionThree = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center font-medium py-20">
        <div className="text-slate-950 text-4xl text-center leading-[2.75rem] -tracking-[0.04rem]">
          We help you identify your pain points and build
          <br />a solution that accelerates your business.
        </div>
        <div className="flex gap-4">
          <button className="px-3 py-[0.62rem] text-white bg-slate-950 rounded-xl flex gap-2 items-center shadow-xs ">
            Book a demo
            <Image width={16} height={16} src={WhiteRightArrow} alt="arrow" />
          </button>
          <button className="text-slate-950 bg-white px-3 py-[0.62rem] border border-slate-200 rounded-xl">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
