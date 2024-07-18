"use client";

import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import { useState } from "react";
import Close from "./Close";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="px-10 lg:px-[7.5rem] flex items-center justify-between py-4 sticky top-0 z-20 backdrop-blur-xl bg-white bg-opacity-90">
        <div className="flex items-center gap-1.5">
          <Logo className="w-8 h-8" />
          <span className="font-Satoshi w-fit font-medium text-base text-black">
            Industrial AI
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-slate-500 font-medium text-sm">
          <Link href="#">Solutions</Link>
          <Link href="#">Our Approach</Link>
          <Link href="#">Security</Link>
          <Link href="#">Company</Link>
        </div>
        <button className="hidden md:block text-slate-950 bg-slate-100 px-[0.62rem] py-[0.38rem] rounded-[0.625rem] text-sm">
          <span className="px-1">Book a demo</span>
        </button>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggle}
            className="text-slate-950 focus:outline-none">
            {navOpen ? <Close /> : <Hamburger />}
          </button>
        </div>
      </div>
      <div
        className={`sticky top-16 z-10 w-full  ${
          navOpen ? "flex" : "hidden"
        } items-center justify-center z-20 backdrop-blur-xl bg-white bg-opacity-90`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-slate-500 font-medium text-sm">
          <li>
            <Link href="#" onClick={handleToggle}>
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#" onClick={handleToggle}>
              Our Approach
            </Link>
          </li>
          <li>
            <Link href="#" onClick={handleToggle}>
              Security
            </Link>
          </li>
          <li>
            <Link href="#" onClick={handleToggle}>
              Company
            </Link>
          </li>
          <li>
            <button
              onClick={handleToggle}
              className="text-slate-950 bg-slate-100 px-[0.62rem] py-[0.38rem] rounded-[0.625rem] text-sm">
              <span className="px-1">Book a demo</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
