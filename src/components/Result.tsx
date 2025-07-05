import { useState } from "react";
import Button from "./Button";

interface ResultProps {
  originalUrl: string;
  shortenedUrl: string;
}

const Result = ({ originalUrl = "www.frontendmentor.com", shortenedUrl = "www.yt.com" }: ResultProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 bg-white rounded-xl ">
      <div className="md:hidden">
        <span>{originalUrl.length > 40 ? originalUrl.slice(0, 30).trim() + "..." : originalUrl.trim()}</span>
        <hr className="-mx-4" />
      </div>

      <span className="hidden md:block">
        {originalUrl.length > 80 ? originalUrl.slice(0, 70).trim() + "..." : originalUrl.trim()}
      </span>

      <div className="md:flex md:flex-row md:items-center">
        <span className="text-cyan md:pr-4">{shortenedUrl}</span>
        <Button copy={isCopied} onClick={handleClick} className="w-full md:w-fit">
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default Result;
