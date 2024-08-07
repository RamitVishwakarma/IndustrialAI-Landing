import React from "react";
import TableContainer from "./TableContainer";
import { dataOne, dataTwo, dataThree } from "./data";
import Lock from "../../../public/Lock.svg";

const SectionEight = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="flex flex-col gap-10 pt-20 relative max-md:items-center max-md:text-center">
          <div className="px-[0.38rem] py-1 bg-red-100 border border-border-color w-fit rounded-full ">
            <div className="px-1 text-red-800 font-medium">Security</div>
          </div>
          <div className="flex flex-col gap-10 z-10">
            <div className="text-slate-950 font-medium  max-w-[49.5rem] tracking-[-0.0625rem] lg:leading-[3.5rem] lg:text-5xl md:text-4xl text-3xl">
              Enterprise-grade security, privacy, and deployment.
            </div>
            <div className="text-slate-500 text-xl max-w-[36.75rem] -tracking-[0.0125rem] leading-7 max-md:mx-auto max-md:text-center">
              We take security seriously. Your data is encrypted, hosted in
              secure data centers, and we undergo regular security audits.
            </div>
          </div>
          <div>
            <button className="border bg-white border-slate-200 rounded-xl box-shadow-xs px-3 py-[0.62rem]">
              <span className="px-1">Learn more</span>
            </button>
            <Lock className="absolute right-0 top-20 z-1 max-md:invisible" />
            {/* <Image src={Lock} alt="" className="absolute right-0 top-20" /> */}
          </div>
        </div>
        <div className="py-20 grid md:grid-cols-3 grid-cols-1 w-fit mx-auto  gap-8">
          <TableContainer data={dataOne} />
          <TableContainer data={dataTwo} />
          <TableContainer data={dataThree} />
        </div>
      </div>
    </>
  );
};

export default SectionEight;
