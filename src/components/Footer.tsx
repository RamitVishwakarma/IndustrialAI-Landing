import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";

const Footer = () => {
  return (
    <>
      <div className="px-8 bg-slate-50">
        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-3">
            <div className="text-slate-950 font-medium text-xl leading-7 tracking[-0.0125rem]">
              Put AI to work.
            </div>
            <div className="text-slate-500 text-base leading-6 tracking[-0.0125rem]">
              Get in touch with our team to explore AI use cases for your <br />
              organization. We&apos;ll work with you to identify the best <br />{" "}
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
        <div className="py-6 text-xs text-slate-400 text-center leading-5 tracking-[-0.00625rem]">
          © 2024 Industrial AI, Inc. All rights reserved. The services and the
          content on this website are provided on an &quot;as is&quot; basis.
          Industrial AI, its licensors, and its suppliers, to the fullest extent
          permitted by law, disclaim all warranties, either express or implied,
          statutory or otherwise, including but not limited to the implied
          warranties of merchantability, non-infringement of third parties&apos;
          rights, and fitness for particular purpose. Without limiting the
          foregoing, Industrial AI, its licensors, and its suppliers make no
          representations or warranties about the accuracy, reliability,
          completeness, currentness, or timeliness of the content, software,
          text, graphics, links, or communications provided on or through the
          use of the website.
        </div>
      </div>
    </>
  );
};

export default Footer;
