import React, { ReactElement } from "react";

interface EmptyLayout {
  children: ReactElement;
}

const EmptyLayout = ({ children }: EmptyLayout) => {
  return <div className="p-3">{children}</div>;
};

export default EmptyLayout;
