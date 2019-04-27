import React from "react";

interface Props {
  width: number;
  height: number;
  style?: any;
}

export const ResizableBox: React.SFC<Props> = ({ width, height, ...props }) => {
  return (
    <div style={{ width: width + "px", height: height + "px", ...props.style }}>
      {props.children}
    </div>
  );
};
