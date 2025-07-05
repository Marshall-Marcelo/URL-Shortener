import React from "react";
import merge from "../utils/merge";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  copy?: boolean;
}

const baseStyle = "px-8 py-3 bg-cyan rounded-2xl text-white font-medium hover:opacity-75 transition max-h-12";
const loadingStyle = "disabled:opacity-50 disabled:bg-gray cursor-not-allowed";
const copyStyle = "bg-very_dark_blue";

const Button = ({ children, onClick, className, loading = false, copy = false }: ButtonProps) => {
  return (
    <button
      className={merge(baseStyle, className, loading ? loadingStyle : "", copy ? copyStyle : "")}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;
