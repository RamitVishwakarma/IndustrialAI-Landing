import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1200px] mx-auto"> {children}</div>;
};

export default Wrapper;
