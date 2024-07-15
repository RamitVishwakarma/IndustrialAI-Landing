import React from "react";
import Accordion from "../Accordion";
import { One, Two, Three, Four, Five, Six } from "./data";

const SectionNine = () => {
  return (
    <>
      <div className="py-20 text-slate-950 text-center font-medium text-5xl tracking-[-0.0625rem] leading-[3.5rem]">
        Frequently asked question
      </div>
      <div className="py-20 flex flex-col gap-3 items-center">
        <Accordion data={One} />
        <Accordion data={Two} />
        <Accordion data={Three} />
        <Accordion data={Four} />
        <Accordion data={Five} />
        <Accordion data={Six} />
      </div>
    </>
  );
};

export default SectionNine;
