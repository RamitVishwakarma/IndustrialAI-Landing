export interface dataProps {
  compColor: string;
  title: string;
  plan: string;
  percentage: number;
  percentageText: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
}

export const PricingDataOne = {
  compColor: "bg-white",
  title: "Starter",
  plan: "“Foundry” Plan",
  percentage: 25,
  percentageText: "of fully burdened labor costs",
  features: [
    "Basic GenAI features only",
    "Email Support only",
    "SaaS deployment only",
    "1 ERP or CRM table integration",
  ],
  buttonText: "Get Started",
  buttonColor: "bg-white",
};
export const PricingDataTwo = {
  compColor: "bg-[#e5e7eb80]",
  title: "Professional",
  plan: "“Forge” Plan",
  percentage: 30,
  percentageText: "of fully burdened labor costs",
  features: [
    "Advanced GenAI features",
    "Email & phone support",
    "SaaS and on-prem deployment",
    "Up to 5 ERP or CRM tables integration",
    "1-time onboarding support",
  ],
  buttonText: "Get a quote today",
  buttonColor: "bg-slate-950 text-white",
};
export const PricingDataThree = {
  compColor: "bg-white",
  title: "Entreprise",
  plan: "“Assembly” Plan",
  percentage: 40,
  percentageText: "of fully burdened labor costs",
  features: [
    "Cusom GenAI features",
    "in-Person consultation & support",
    "Unlimited ERP or CRM tables",
    "24/7 onboarding and support",
    "Custom SLA & security policy",
  ],
  buttonText: "Contact Sales",
  buttonColor: "bg-white",
};
