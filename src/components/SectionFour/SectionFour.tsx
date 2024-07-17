import React from "react";
import { PricingComponent } from "./PricingComponent";
import { PricingDataOne, PricingDataTwo, PricingDataThree } from "./data";

const SectionFour = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="flex flex-col gap-6 text-center py-20">
          <div className="text-slate-950 font-medium text-5xl leading-[3.5rem] tracking-[-0.0625rem]">
            Simple and transparent pricing
          </div>
          <div className="text-slate-500 text-xl mx-auto max-w-[36.75rem] leading-[1.75rem] tracking-[-0.0125rem] ">
            Our pricing model works based on a percentage of your fully burdened
            labor costs.
          </div>
        </div>
        {/* end of sec-1 */}
        <div className="grid md:grid-cols-3 justify-center py-20 gap-6">
          <PricingComponent data={PricingDataOne} />
          <PricingComponent data={PricingDataTwo} />
          <PricingComponent data={PricingDataThree} />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
