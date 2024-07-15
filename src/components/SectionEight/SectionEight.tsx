import React from "react";
import TableContainer from "./TableContainer";
import { dataOne, dataTwo, dataThree } from "./data";

const SectionEight = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="flex flex-col gap-10">
          <div className="px-[0.38rem] py-1 bg-red-100 border border-border-color w-fit rounded-full ">
            <div className="px-1 text-red-800 font-medium">Security</div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-slate-950 font-medium  tracking-[-0.0625rem] leading-[3.5rem] text-5xl">
              Enterprise-grade security, privacy,
              <br /> and deployment.
            </div>
            <div className="text-slate-500 text-xl -tracking-[0.0125rem] leading-7">
              We take security seriously. Your data is encrypted, hosted in{" "}
              <br />
              secure data centers, and we undergo regular security audits.
            </div>
          </div>
          <div>
            <button className="border bg-white border-slate-200 rounded-xl box-shadow-xs px-3 py-[0.62rem]">
              <span className="px-1">Learn more</span>
            </button>
          </div>
        </div>
        <div className="py-20 grid grid-cols-3 gap-8">
          <TableContainer data={dataOne} />
          <TableContainer data={dataTwo} />
          <TableContainer data={dataThree} />
        </div>
      </div>
    </>
  );
};

export default SectionEight;
