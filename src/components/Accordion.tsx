"use client";

import { ReactNode, useState } from "react";

type dataType = {
  title: string;
  content: string;
};

const Accordion = ({ data }: { data: dataType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition ease-in-out w-full max-w-[36rem]">
      {!isOpen && (
        <button
          onClick={toggleAccordion}
          className="w-full px-5 py-4 font-medium text-[1.125rem] bg-white border border-border-color rounded-[0.625rem] text-start">
          {data.title}
        </button>
      )}
      {isOpen && (
        <button
          onClick={toggleAccordion}
          className="w-full px-5 py-4 flex flex-col gap-1 rounded-[0.625rem] border-border-color bg-slate-50 box-shadow-xs">
          <span className="text-start text-slate-950 font-medium tracking-[-0.0125rem] leading-[1.625rem] text-[1.125rem]">
            {data.title}
          </span>
          <span className="text-slate-500 text-base text-start font-normal leading-[1.5rem] tracking-[-0.0125rem]">
            {data.content}
          </span>
        </button>
      )}
    </div>
  );
};

export default Accordion;
