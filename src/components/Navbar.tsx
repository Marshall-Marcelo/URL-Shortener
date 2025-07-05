import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative bg-white flex flex-row justify-between items-center">
      <img src="/logo.svg" alt="" />

      <div className="hidden md:w-full md:flex md:flex-row md:items-center md:justify-between">
        <div>
          <ul className="text-gray font-medium pl-10 flex flex-row gap-4 items-center">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="text-gray font-medium flex flex-row gap-4 items-center">
          <span>Login</span>
          <Button>Sign Up</Button>
        </div>
      </div>

      <div className="md:hidden ">
        <CiMenuBurger className="size-8" onClick={() => setIsOpen((prev) => !prev)} />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full top-10 bg-very_dark_violet rounded-xl text-white">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <hr className="w-full " />
            <li>Login</li>
            <li className="w-full">
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
