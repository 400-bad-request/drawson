import React from "react";
import BarType from "../../utils/BarType";
import { BAR_WIDTH } from "../../utils/constants";

interface Props {
  orientation: BarType;
  length: number;
  onMouseDown?: any;
  onMouseMove?: any;
  onMouseUp?: any;
}

export const ResizeBar: React.SFC<Props> = ({
  orientation,
  length,
  onMouseUp,
  onMouseDown,
  onMouseMove
}) => {
  return (
    <div
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      style={getStyle(orientation, length)}
    />
  );
};

const getStyle = (orientation: BarType, length: number) => {
  if (orientation === BarType.HORIZONTAL) {
    return {
      width: length + "px",
      height: BAR_WIDTH,
      cursor: "ns-resize"
    };
  } else {
    return {
      height: length + "px",
      width: BAR_WIDTH,
      cursor: "ew-resize"
    };
  }
};
