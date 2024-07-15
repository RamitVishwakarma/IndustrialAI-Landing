import React from "react";
import { dataProps } from "./data";
import Image from "next/image";
import CheckList from "../../../public/CheckList.svg";

const TableContainer = ({ data }: { data: dataProps }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <span className="text-slate-950 text-[1.125rem] font-medium leading-[1.625rem] -tracking-[0.0125rem]">
          {data.title}
        </span>
        <ul className="flex flex-col gap-4">
          {data.points.map((point) => (
            <li className="flex items-center gap-2 text-slate-500 text-base leading-6 -tracking-[0.0125rem]">
              <Image src={CheckList} alt="check" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TableContainer;
