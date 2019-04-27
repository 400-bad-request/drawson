import React from "react";

interface Props {
  width: number;
  height: number;
  style?: any;
  className?: string;
}

export const ResizableBox: React.SFC<Props> = ({ width, height, ...props }) => {
  return (
    <div
      className={props.className}
      style={{ width: width + "px", height: height + "px", ...props.style }}
    >
      {props.children}
    </div>
  );
};
