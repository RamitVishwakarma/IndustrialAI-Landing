import React from "react";
import { dataInterface } from "./data";
import Image from "next/image";
import Toolbar from "../../../public/Toolbar.svg";

const Videos = ({ data }: { data: dataInterface }) => {
  return (
    <>
      <div className="flex flex-col rounded-3xl bg-white border border-border-color">
        <div className="pt-8 px-10 flex gap-4 justify-between">
          <div
            dangerouslySetInnerHTML={{ __html: data.description }}
            className="text-slate-500 text-base leading-6 tracking-[-0.0125rem]"
          />
          <button className="px-[0.62rem] py-[0.38rem] text-slate-950 font-medium tracking-[-0.0125rem] leading-5 text-sm rounded-[0.625rem] border border-slate-200 box-shadow-xs">
            <span className="px-1">{data.descButtonText}</span>
          </button>
        </div>
        <div className="py-6 px-10 flex flex-col items-center rounded-b-3xl">
          <div className="video-box-shadow rounded-b-[0.5895rem] border-vid flex flex-col items-center">
            {/* Toolbar */}
            <div className="px-4 py-[0.59rem] flex gap-[0.39rem] items-start w-full  ">
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem] "></div>
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem] "></div>
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem] "></div>
            </div>
            {/* video */}
            <div className="px-2 pb-2">
              <video
                className="max-w-[58.0625rem] max-h-[35.875rem] bg-white rounded-[0.5895rem] border-vid"
                src={data.videoUrl}>
                Your browser does not suppoer video tags
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
