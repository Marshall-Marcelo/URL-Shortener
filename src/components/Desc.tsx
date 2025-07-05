import React from "react";

interface DescProps {
  children: React.ReactNode;
}

const Desc = ({ children }: DescProps) => {
  return <div className="font-medium text-gray text-base text-center md:text-start">{children}</div>;
};

export default Desc;
