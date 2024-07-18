"use client";

import React from "react";
import { dataInterface } from "./data";
import { useRef, useState } from "react";
import Play from "../../../public/Play.svg";
import Pause from "../../../public/Pause.svg";

const Videos = ({ data }: { data: dataInterface }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const handleVideoPlayback = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <>
      <div className="flex flex-col rounded-3xl bg-white border border-border-color max-w-[64rem] ">
        <div className="pt-8 px-10 flex gap-4 justify-between max-md:flex-col">
          <div className="text-slate-500 text-base leading-6 tracking-[-0.0125rem]">
            {data.description}
          </div>
          <button className="px-[0.62rem] py-[0.38rem] text-slate-950 font-medium tracking-[-0.0125rem] leading-5 text-sm rounded-[0.625rem] border border-slate-200 box-shadow-xs">
            <span className="px-1">{data.descButtonText}</span>
          </button>
        </div>
        <div className="py-6 px-10 flex flex-col items-center rounded-b-3xl ">
          <div className="video-box-shadow rounded-b-[0.5895rem] border-vid flex flex-col items-center">
            {/* Toolbar */}
            <div className="px-4 py-[0.59rem] flex gap-[0.39rem] items-start w-full">
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem]"></div>
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem]"></div>
              <div
                style={{ background: "rgba(10, 15, 41, 0.25)" }}
                className="rounded-full w-[0.59rem] h-[0.59rem]"></div>
            </div>
            {/* video */}
            <div className="relative px-2 pb-2">
              <video
                ref={videoRef}
                className="max-w-[58.0625rem] max-h-[35.875rem] w-full h-auto bg-white rounded-[0.5895rem] border-vid"
                src={data.videoUrl}
                onClick={handleVideoPlayback}>
                Your browser does not support video tags
              </video>
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <button
                  className={`w-24 h-24 shadow-lg bg-cyan-600 opacity-50 hover:opacity-100 transition duration-200 rounded-full p-8 ${
                    playing ? "hidden" : "flex"
                  } items-center justify-center`}
                  onClick={handleVideoPlayback}>
                  <Play />
                </button>
                <button
                  className={`absolute bottom-3 right-3 bg-slate-950 opacity-50 hover:opacity-100 text-white text-2xl rounded-full p-6 shadow-lg transition duration-200 ${
                    playing ? "flex" : "hidden"
                  } items-center justify-center`}
                  onClick={handleVideoPlayback}>
                  <Pause />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
