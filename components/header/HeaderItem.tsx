import { useState } from "react";
import useHover from "../../hooks/useHover";
import ToolTip from "../common/ToolTip";

interface IHeaderItem {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
}
const HeaderItem = ({ icon: Icon, title }: IHeaderItem) => {
  const [coords, setCoord] = useState<DOMRect>();
  const { hovered, nodeRef } = useHover();
  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement;
    const coord = node.getBoundingClientRect();
    setCoord(coord);
  };
  return (
    <div
      ref={nodeRef as React.RefObject<HTMLDivElement>}
      className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-active"
      onMouseEnter={handleHover}
    >
      <Icon className="icon" />
      {hovered && <ToolTip coords={coords as DOMRect}>{title}</ToolTip>}
    </div>
  );
};

export default HeaderItem;
