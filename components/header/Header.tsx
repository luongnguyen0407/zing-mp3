import React from "react";
import InputSearch from "./InputSearch";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="fixed flex items-center w-full p-3 text-white bg-secondary">
      <div className="flex gap-2 item-center">
        <ArrowSmallLeftIcon className="icon" />
        <ArrowSmallRightIcon className="icon" />
      </div>
      <InputSearch />
    </div>
  );
};

export default Header;
