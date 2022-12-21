import Link from "next/link";
import { useRouter } from "next/router";
interface SideBarItemProps {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
  to: string;
}
const SideBarItem = ({ icon: Icon, title, to }: SideBarItemProps) => {
  const router = useRouter();
  return (
    <Link href={to} passHref>
      <div
        className={`${
          router.pathname == to
            ? "bg-active border-[#9B4DE0]"
            : "border-transparent"
        } flex items-center px-6 py-2 font-semibold  border-l-2 cursor-pointer text-text01 hover:text-white p-side-item`}
      >
        <Icon strokeWidth={2} className="icon" />
        <p className="ml-2">{title}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
