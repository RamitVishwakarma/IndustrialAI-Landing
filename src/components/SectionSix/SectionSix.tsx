import Image from "next/image";
import Star from "../../../public/star.svg";

const SectionSix = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 py-20 bg-slate-50">
        <div className="flex gap-2">
          <Image src={Star} width={20} height={20} alt="Star" />
          <Image src={Star} width={20} height={20} alt="Star" />
          <Image src={Star} width={20} height={20} alt="Star" />
          <Image src={Star} width={20} height={20} alt="Star" />
          <Image src={Star} width={20} height={20} alt="Star" />
        </div>
        <div className="text-center text-2xl leading-[2.75rem] tracking-[-0.04375rem]">
          “15 years ago, it wasn’t that hard to do what we do. Today, we offer
          more <br /> products than ever. It takes time to do planning.{" "}
          <span className="font-semibold text-2xl leading-[2.75rem] tracking-[-0.04375rem]">
            <b>
              Industrial AI is like a <br />
              really smart Google but made just for our manufacturing
              data.&nbsp;
            </b>
          </span>
          Industrial <br /> AI makes it easier, does the manual work for us, and
          give us the options.
          <br /> It’s a game changer.”
        </div>
        <div className="text-slate-500 font-normal tracking-[-0.0125rem]">
          MRP Manager, Multi-Billion Dollar Manufacturer
        </div>
      </div>
    </>
  );
};

export default SectionSix;
