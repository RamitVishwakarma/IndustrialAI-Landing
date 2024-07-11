import React from "react";
import Image from "next/image";
import RightArrow from "../../public/RightArrow.svg";

const SectionOne = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center text-center py-40">
        <div>
          <button className="border border-[#0a0f2914] p-1 flex gap-1 items-center rounded-full">
            <div className="bg-[#E9EAEC] text-slate-950 px-2 rounded-full font-medium">
              Update
            </div>
            <span className="font-medium px-1">We’re hiring</span>
            <Image width={16} height={16} src={RightArrow} alt="Right Arrow" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-[450] text-[4rem] text-slate-950 leading-[4.5rem] -tracking-[0.10625rem]">
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
          <span className="text-slate-500 text-xl font-normal -tracking-[-0.0125rem]">
            Leverage enterprise-wide data to make better decisions.
          </span>
        </div>
        <div className="flex gap-4">
          <button className="px-3 py-[0.62rem] bg-slate-950 rounded-xl text-white font-medium">
            Get started
          </button>
          <button className="px-3 py-[0.62rem] text-slate-950 rounded-xl border border-slate-200 font-medium">
            Watch demo
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
