import React from "react";
import merge from "../utils/merge";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const baseStyle = "text-center font-bold text-2xl";

const Title = ({ children, className }: TitleProps) => {
  return <div className={merge(baseStyle, className)}>{children}</div>;
};

export default Title;
