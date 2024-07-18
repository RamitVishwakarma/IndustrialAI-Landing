import Image from "next/image";
import Star from "../../../public/Star.svg";

const SectionSix = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 py-20 bg-slate-50">
        <div className="flex gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          {/* <Image src={Star} className="w-5 h-5" alt="Star" />
          <Image src={Star} className="w-5 h-5" alt="Star" />
          <Image src={Star} className="w-5 h-5" alt="Star" />
          <Image src={Star} className="w-5 h-5" alt="Star" />
          <Image src={Star} className="w-5 h-5" alt="Star" /> */}
        </div>
        <div className="text-center max-w-[49.5rem] text-2xl leading-[2.75rem] tracking-[-0.04375rem]">
          “15 years ago, it wasn’t that hard to do what we do. Today, we offer
          more products than ever. It takes time to do planning.&nbsp;&nbsp;
          <span className="font-semibold max-w-[49.5rem] text-2xl leading-[2.75rem] tracking-[-0.04375rem]">
            Industrial AI is like a really smart Google but made just for our
            manufacturing data.&nbsp;
          </span>
          Industrial AI makes it easier, does the manual work for us, and give
          us the options. It’s a game changer.”
        </div>
        <div className="text-slate-500 font-normal tracking-[-0.0125rem]">
          MRP Manager, Multi-Billion Dollar Manufacturer
        </div>
      </div>
    </>
  );
};

export default SectionSix;
