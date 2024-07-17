import React from "react";
import Image from "next/image";
import RightArrow from "../../../public/RightArrow.svg";

const SectionOne = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center text-center py-40">
        <div>
          <button className="border border-border-color p-1 flex gap-1 items-center rounded-full">
            <div className="bg-[#E9EAEC] text-slate-950 px-2 rounded-full font-medium">
              Update
            </div>
            <span className="font-medium px-1">We’re hiring</span>
            <Image className="w-4 h-4" src={RightArrow} alt="Right Arrow" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-[450] lg:leading-[4.5rem] lg:text-[4rem] md:text-[3rem] md:leading-[3.375rem] sm:text-[2rem] sm:leading-[2.25rem] text-2xl text-slate-950  -tracking-[0.10625rem]">
            Optimize{" "}
            <span className="underline underline-offset-[0.5rem] decoration-cyan-200">
              decision-making
            </span>
            <br />
            using complex{" "}
            <span className="underline underline-offset-[0.5rem] decoration-emerald-200">
              enterprise{" "}
            </span>
            data
            <br />
            with{" "}
            <span className="underline underline-offset-1 decoration-yellow-200">
              Generative Analytics
            </span>
            .
          </div>
          <span className="text-slate-500 mx-auto max-w-[36.75rem] lg:text-xl lg:leading-7 md:text-lg md:leading-5 sm:text-base sm:leading-4 text-sm leading-3 font-normal -tracking-[-0.0125rem]">
            Leverage enterprise-wide data to make better decisions.
          </span>
        </div>
        <div className="flex gap-4">
          <button className="px-3 py-[0.62rem] bg-slate-950 rounded-xl text-white font-medium">
            <span className="px-1">Get started</span>
          </button>
          <button className="px-3 py-[0.62rem] text-slate-950 rounded-xl border border-slate-200 font-medium">
            <span className="px-1">Watch demo</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
