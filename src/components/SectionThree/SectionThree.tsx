import React from "react";
import WhiteRightArrow from "../../../public/WhiteRightArrow.svg";
import Image from "next/image";
import SectionThreePartOne from "../../../public/SectionThreePartOne.svg";
import SectionThreePartTwo from "../../../public/SectionThreePartTwo.svg";
import SectionThreePartThree from "../../../public/SectionThreePartThree.svg";
import SectionThreePartFour from "../../../public/SectionThreePartFour.svg";

const SectionThree = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center font-medium py-20">
        <div className="text-slate-950 max-w-[49.5rem] lg:text-4xl lg:leading-[2.75rem]  sm:leading-[2.50rem] sm:text-3xl text-xl leading-7 text-center -tracking-[0.04rem]">
          We help you identify your pain points and build a solution that
          accelerates your business.
        </div>
        <div className="flex gap-4">
          <button className="px-3 py-[0.62rem] text-white bg-slate-950 rounded-xl flex gap-2 items-center shadow-xs ">
            <span className="px-1">Book a demo</span>
            <WhiteRightArrow />
            {/* <Image className="w-4 h-4" src={WhiteRightArrow} alt="arrow" /> */}
          </button>
          <button className="text-slate-950 bg-white px-3 py-[0.62rem] border border-slate-200 rounded-xl">
            <span className="px-1">Learn more </span>
          </button>
        </div>
      </div>

      {/* part two part one*/}
      <div className="grid justify-center lg:grid-rows-2 gap-6 py-20">
        <div className="grid  lg:grid-cols-12 max-lg:grid-rows-2 lg:row-span-1 gap-6">
          {/* 1 */}
          <div className="lg:col-span-7 max-lg:row-span-1 border border-border-color rounded-3xl py-[0.87rem]">
            <div className="flex flex-col gap-6 p-8">
              <div className="bg-blue-50 text-blue-900 py-1 px-[0.62rem] font-medium w-fit border border-border-color rounded-lg">
                1
              </div>
              <div>
                <div className=" flex flex-col gap-4 ">
                  <div className="text-slate-950 font-medium text-2xl">
                    Find the problem
                  </div>
                  <div className="text-slate-500 text-base">
                    Where are you manually doing things that could be automated?
                  </div>
                  <div className="italic text-slate-400">
                    e.g. You&apos;re spending too much time manually quoting
                    your customers, leading to <br /> slow response times and
                    lost sales.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pb-6">
              <SectionThreePartOne />
            </div>
          </div>
          {/* 2 */}
          <div className="lg:col-span-5 max-lg:row-span-1 border border-border-color rounded-3xl py-[0.87rem]">
            <div className="flex flex-col gap-6 p-8">
              <div className="bg-fuchsia-50 text-fuchsia-900 py-1 px-[0.62rem] font-medium w-fit border border-border-color rounded-lg">
                2
              </div>
              <div>
                <div className=" flex flex-col gap-4 ">
                  <div className="text-slate-950 font-medium text-2xl">
                    Eliminate the pain
                  </div>
                  <div className="text-slate-500 text-base">
                    We&apos;ll automate your workflow to eliminate the pain
                    points.
                  </div>
                  <div className="italic text-slate-400">
                    e.g. Industrial AI takes in your customer&apos;s RFQs and{" "}
                    <br />
                    automatically generates a quote for you.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pb-6">
              <SectionThreePartTwo />
            </div>
          </div>
        </div>

        <div className="grid max-lg:grid-rows-2 lg:grid-cols-12 lg:row-span-1 gap-6">
          {/* 3 */}
          <div className="lg:col-span-5 max-lg:row-span-1 border border-border-color rounded-3xl py-[0.87rem]">
            <div className="flex flex-col gap-6 p-8">
              <div className="bg-cyan-50 text-cyan-900 py-1 px-[0.62rem] font-medium w-fit border border-border-color rounded-lg">
                3
              </div>
              <div>
                <div className=" flex flex-col gap-4 ">
                  <div className="text-slate-950 font-medium text-2xl">
                    Get you moving
                  </div>
                  <div className="text-slate-500 text-base">
                    We integrate with your existing IT systems to get you
                    moving.
                  </div>
                  <div className="italic text-slate-400">
                    e.g. Industrial AI takes in your customer&apos;s RFQs and{" "}
                    <br />
                    automatically generates a quote for you.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <SectionThreePartThree />
            </div>
          </div>
          {/* 4 */}
          <div className="lg:col-span-7 max-lg:row-span-1 border border-border-color rounded-3xl py-[0.87rem]">
            <div className="flex flex-col gap-6 p-8">
              <div className="bg-lime-50 text-lime-900 py-1 px-[0.62rem] font-medium w-fit border border-border-color rounded-lg">
                4
              </div>
              <div>
                <div className=" flex flex-col gap-4 ">
                  <div className="text-slate-950 font-medium text-2xl">
                    Accelerate
                  </div>
                  <div className="text-slate-500 text-base">
                    Take your automation to the next level.
                  </div>
                  <div className="italic text-slate-400">
                    e.g. Automatically email your clients with their quote and
                    PO,
                    <br />
                    and track their responses.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-8">
              <SectionThreePartFour />
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default SectionThree;
