import SectionFour from "@/components/SectionFour/SectionFour";
import SectionOne from "@/components/SectionOne/SectionOne";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionSix from "@/components/SectionSix/SectionSix";
import SectionSeven from "@/components/SectionSeven/SectionSeven";
import SectionEight from "@/components/SectionEight/SectionEight";
import SectionNine from "@/components/SectionNine/SectionNine";

export default function Home() {
  return (
    <div className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-slate-50">
      <div>
        <SectionOne />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <SectionThree />
      </div>
      <div>
        <SectionFour />
      </div>
      <div>
        <SectionFive />
      </div>
      <div>
        <SectionSix />
      </div>
      <div>
        <SectionSeven />
      </div>
      <div>
        <SectionEight />
      </div>
      <div>
        <SectionNine />
      </div>
    </div>
  );
}
