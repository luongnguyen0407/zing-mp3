import {
  MusicalNoteIcon,
  MapIcon,
  ChartPieIcon,
  RadioIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import SideBarItem from "./SideBarItem";

const LIST_SIDEBAR = [
  {
    icon: MusicalNoteIcon,
    title: "Cá Nhân",
    to: "/profile",
  },
  {
    icon: MapIcon,
    title: "Khám Phá",
    to: "/",
  },
  {
    icon: ChartPieIcon,
    title: "#zingchart",
    to: "/char",
  },
  {
    icon: RadioIcon,
    title: "Radio",
    to: "/radio",
  },
  {
    icon: WindowIcon,
    title: "Theo Dõi",
    to: "/flow",
  },
];

const SideBar: FC = () => {
  return (
    <div className="w-1/5 overflow-y-scroll text-red-300 bg-primary scroll-hide max-w-[240px]">
      <div className="fixed max-w-[240px] w-full">
        <div className="mt-2 p-side-item">
          <Link href={"/"}>
            <Image
              src={"/img/ZingMP3logo.png"}
              alt="logo"
              width={130}
              height={40}
            />
          </Link>
        </div>
        <>
          {LIST_SIDEBAR.map((item, index) => (
            <SideBarItem
              to={item.to}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default SideBar;
