import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";

const SectionTen = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-3">
            <div className="text-slate-950 font-medium text-xl leading-7 tracking[-0.0125rem]">
              Put AI to work.
            </div>
            <div className="text-slate-500 text-base leading-6 tracking[-0.0125rem]">
              Get in touch with our team to explore AI use cases for your <br />
              organization. We'll work with you to identify the best <br />{" "}
              opportunities for AI to drive ROI.
            </div>
          </div>
          <div>
            <button className="px-3 py-[0.62rem] bg-slate-950 box-shadow-xs rounded-xl">
              <span className="px-1 text-white ">Talk with our team</span>
            </button>
          </div>
        </div>
        <div className="py-10 flex justify-between">
          <div className="flex items-center gap-1.5">
            <Image className="w-8 h-8" src={Logo} alt="Industrial AI" />
            <span className="font-Satoshi w-fit font-medium text-base">
              Industrial AI
            </span>
          </div>
          <ul className="flex appearance-none text-slate-500 gap-6 items-center text-[0.875rem] font-medium tracking-[-0.00625rem] leading-5">
            <li className="underline">
              <a href="#">support@getindustrial.ai</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionTen;
