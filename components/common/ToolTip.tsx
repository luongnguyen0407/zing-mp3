import ReactDOM from "react-dom";

interface IToolTip {
  children: string;
  bottom?: boolean;
  coords: DOMRect;
}
const ToolTip = ({ children, bottom, coords }: IToolTip) => {
  const top = bottom
    ? coords.top - coords.height / 2
    : coords.top + coords.height / 2;
  return ReactDOM.createPortal(
    <div
      className={`absolute bottom-0 px-2 py-1 text-xs ${
        bottom ? "arrow-dow -translate-y-full" : "arrow-up translate-y-full"
      } bg-gray-500 text-white whitespace-nowrap h-[25px] rounded-sm -translate-x-2/4`}
      style={{
        top: top + window.scrollY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </div>,
    document.querySelector("body")!
  );
};

export default ToolTip;
