import Image from "next/image";
import SectionFiveImage from "../../../public/SectionFive.svg";

const SectionFive = () => {
  return (
    <div className="flex gap-12 py-20">
      <div>
        <div className="text center">
          Our solutions sit <br /> on top of your IT <br /> Infrastructure.
        </div>
        <div>IndustrialAI integrate with your ERP, CRM, and more.</div>
        <div>
          <button>Book a demo</button>
          <button>View all solutions</button>
        </div>
      </div>
      <div>
        <Image src={SectionFiveImage} alt="" />
      </div>
    </div>
  );
};

export default SectionFive;
