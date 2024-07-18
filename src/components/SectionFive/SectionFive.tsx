import SectionFiveImage from "../../../public/SectionFive.svg";

const SectionFive = () => {
  return (
    <div className="flex gap-12 py-20 items-center max-lg:flex-col max-lg:text-center">
      <div className="flex flex-col gap-6">
        <div className="text-slate-950 lg:max-w-[24.25rem] max-lg:max-w-[35rem] font-medium text-5xl leading-[3.5rem] -tracking-[0.0625rem]">
          Our solutions sit on top of your IT Infrastructure.
        </div>
        <div className="text-slate-500 lg:max-w-[24.25rem] max-lg:max-w-[35rem] text-xl leading-7 -tracking-[0.0125rem]">
          IndustrialAI integrate with your ERP, CRM, and more.
        </div>
        <div className="flex gap-1 font-medium max-lg:justify-center">
          <button className="px-3 py-[0.62rem] bg-slate-950 text-white rounded-xl">
            <span className="px-1">Book a demo</span>
          </button>
          <button className="px-3 py-[0.62rem] rounded-xl border border-slate-200">
            <span className="px-1">View all solutions</span>
          </button>
        </div>
      </div>
      <div>
        <SectionFiveImage />
      </div>
    </div>
  );
};

export default SectionFive;
