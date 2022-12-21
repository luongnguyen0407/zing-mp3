import React from "react";
import InputSearch from "./InputSearch";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ArrowUpTrayIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="sticky top-0 w-full p-3 text-white bg-secondary">
      <div className="container flex items-center justify-between">
        <div className="flex gap-2 item-center">
          <ArrowSmallLeftIcon className="icon" />
          <ArrowSmallRightIcon className="icon" />
        </div>
        <InputSearch />
        <div className="flex justify-end flex-1 gap-x-3">
          <HeaderItem icon={ArrowUpTrayIcon} title="Tải lên" />
          <HeaderItem icon={Cog6ToothIcon} title="Cài đặt" />
        </div>
      </div>
    </div>
  );
};
export default Header;
