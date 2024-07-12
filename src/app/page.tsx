import SectionOne from "@/components/SectionOne/SectionOne";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
