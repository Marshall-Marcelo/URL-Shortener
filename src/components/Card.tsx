import React from "react";
import merge from "../utils/merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const baseStyle = "relative flex flex-col items-center pt-14 px-6 pb-6 gap-2 rounded-xl bg-white md:items-start";

const Card = ({ children, className }: CardProps) => {
  return <div className={merge(baseStyle, className)}>{children}</div>;
};

export default Card;
