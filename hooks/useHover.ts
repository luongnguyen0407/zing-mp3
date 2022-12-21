import { useRef, useState, useEffect } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState<boolean>(false);
  const nodeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom && dom.removeEventListener("mouseover", handleMouseOver);
      dom && dom.removeEventListener("mouseout", handleMouseOut);
    };
  });
  return {
    hovered,
    nodeRef,
  };
}
