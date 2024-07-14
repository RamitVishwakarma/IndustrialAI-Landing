import Image from "next/image";
import SectionFiveImage from "../../../public/SectionFive.svg";

const SectionFive = () => {
  return (
    <div className="flex gap-12 py-20">
      <div className="flex flex-col gap-6">
        <div className="text-slate-950 font-medium text-5xl leading-[3.5rem] -tracking-[0.0625rem]">
          Our solutions sit <br /> on top of your IT <br /> Infrastructure.
        </div>
        <div className="text-slate-500 text-xl leading-7 -tracking-[0.0125rem]">
          IndustrialAI integrate with your ERP, CRM, <br /> and more.
        </div>
        <div className="flex gap-1 font-medium">
          <button className="px-3 py-[0.62rem] bg-slate-950 text-white rounded-xl">
            <span className="px-1">Book a demo</span>
          </button>
          <button className="px-3 py-[0.62rem] rounded-xl border border-slate-200">
            <span className="px-1">View all solutions</span>
          </button>
        </div>
      </div>
      <Image src={SectionFiveImage} width={764} height={514} alt="" />
    </div>
  );
};

export default SectionFive;
