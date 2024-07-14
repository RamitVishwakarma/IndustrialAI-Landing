import React from "react";
import { PricingComponent } from "./PricingComponent";
import { PricingDataOne, PricingDataTwo, PricingDataThree } from "./data";

const SectionFour = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="flex flex-col gap-6 text-center py-20">
          <div className="text-slate-950 font-medium text-5xl">
            Simple and transparent pricing
          </div>
          <div className="text-slate-500 text-2xl ">
            Our pricing model works based on a percentage of your fully burdened{" "}
            <br />
            labor costs.
          </div>
        </div>
        {/* end of sec-1 */}
        <div className="flex py-20 gap-6">
          <PricingComponent data={PricingDataOne} />
          <PricingComponent data={PricingDataTwo} />
          <PricingComponent data={PricingDataThree} />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
