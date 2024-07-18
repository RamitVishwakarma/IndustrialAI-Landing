import SectionFour from "@/components/SectionFour/SectionFour";
import SectionOne from "@/components/SectionOne/SectionOne";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionSix from "@/components/SectionSix/SectionSix";
import SectionSeven from "@/components/SectionSeven/SectionSeven";
import SectionEight from "@/components/SectionEight/SectionEight";
import SectionNine from "@/components/SectionNine/SectionNine";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-slate-50">
      <div>
        <Wrapper>
          <SectionOne />
        </Wrapper>
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <Wrapper>
          <SectionThree />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionFour />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionFive />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionSix />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionSeven />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionEight />
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <SectionNine />
        </Wrapper>
      </div>
    </div>
  );
}
