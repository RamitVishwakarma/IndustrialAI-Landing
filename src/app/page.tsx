import SectionFour from "@/components/SectionFour/SectionFour";
import SectionOne from "@/components/SectionOne/SectionOne";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
