import { StaticImageData } from "next/image";
import avatar1 from "../../../public/images/avatar1.png";
import avatar2 from "../../../public/images/avatar2.png";
import avatar3 from "../../../public/images/avatar3.png";
import avatar4 from "../../../public/images/avatar4.png";

export interface dataProps {
  avatar: StaticImageData;
  avatarColor: string;
  name: string;
  designation: string;
  description: string;
}

export const DataOne = {
  avatar: avatar1,
  avatarColor: "bg-cyan-200",
  name: "Sahitya Senapathy",
  designation: "Founder and CEO",
  description:
    "Sahitya built Palantir's (NYSE: PLTR) first   commercialized  Large Language Model (LLM) product  and led an 8-figure Generative AI implementation for a  Fortune 200 manufacturer. He has built Gen AI  products at AWS and the Air Force Research Lab. He is  a UPenn CS and Wharton finance graduate.",
};

export const DataTwo = {
  avatar: avatar2,
  avatarColor: "bg-emerald-200",
  name: "Josh Ludan",
  designation: "Generative AI Lead",
  description:
    "Josh Ludan is a PhD candidate at the University of  Pennsylvania, where he researches cutting-edge  properties of Large Language Models and multi-modal  AI. He has published 6 research papers on AI in past  year and previously worked as a quantitative trader on  Wall Street.",
};

export const DataThree = {
  avatar: avatar3,
  avatarColor: "bg-yellow-200",
  name: "Sonny Tara",
  designation: "Board of Advistors",
  description:
    "Sonny is the former COO and CFO of Oshkosh Corp  (NYSE: OSK), a Fortune 500 manufacturing company,  and was Group President of Marmon Holdings, a  Berkshire Hathaway industrial company. He has over  30 years of experience in the manufacturing and  supply chain industries.",
};

export const DataFour = {
  avatar: avatar4,
  avatarColor: "bg-purple-200",
  name: "Chris Featherstone",
  designation: "Board of Advistors",
  description:
    "Chris is a technology executive at Amazon Web Services  (AWS) where he leads Generative AI Go-to-Market strategy. He previously held senior product  leadership positions at Salesforce and Cisco. He has  over 20 years of experience in artificial intelligence and  machine learning.",
};
