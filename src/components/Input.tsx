import React from "react";
import merge from "../utils/merge";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
}

const baseStyle = "rounded-xl p-3";
const errorStyle = "border-red border-solid border-2 placeholder:text-red placeholder:opacity-50 placeholder:pl-3";

const Input = ({ onChange, value, className, error = false }: InputProps) => {
  return (
    <>
      <div className="flex flex-col w-full gap-2">
        <input
          className={merge(baseStyle, className, error ? errorStyle : "")}
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Shorten a link here..."
        ></input>
        {error && <span className="text-red italic">Please add a link</span>}
      </div>
    </>
  );
};

export default Input;
