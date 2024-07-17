import Image from "next/image";
import React from "react";
import CheckList from "../../../public/CheckList.svg";
import Divider from "../../../public/Divider.svg";
import { dataProps } from "./data";

export const PricingComponent = ({ data }: { data: dataProps }) => {
  return (
    <div
      className={`${data.compColor} lg:min-w-[18.75rem] md:min-w-[16rem] max-w-[24rem] rounded-3xl border border-border-color`}>
      <div className=" p-6 flex flex-col gap-6">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-slate-950 font-medium text-2xl">
                {data.title}
              </div>
              <div className="text-slate-500">{data.plan}</div>
            </div>
            <div className="flex gap items-end">
              <span className="text-slate-950 text-5xl font-medium">
                {data.percentage}
              </span>{" "}
              <span className="text-slate-500 text-5xl font-medium">%</span>
              <span className="text-slate-500 text-sm font-medium pb-1">
                {data.percentageText}
              </span>
            </div>
          </div>
        </div>
        <Image src={Divider} alt="divider" />
        <ul className="flex flex-col gap-4 h-[14.5rem] md:h-[16.5rem]">
          {data.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-base -tracking-[0.0125rem]">
              <Image src={CheckList} alt="check" />
              {feature}
            </li>
          ))}
        </ul>
        <Image src={Divider} alt="divider" />
        <button
          className={`${data.buttonColor} w-full border px-3 py-[0.62rem] border-slate-200 box-shadow-xs rounded-xl`}>
          <span className="px-1">{data.buttonText}</span>
        </button>
      </div>
    </div>
  );
};
