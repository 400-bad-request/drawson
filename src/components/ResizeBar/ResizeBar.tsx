import React from "react";
import BarType from "../../utils/BarType";
import { RESIZE_BAR_WIDTH } from "../../utils/constants";
import "./ResizeBar.scss";

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
      className="resize-bar"
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
      height: RESIZE_BAR_WIDTH,
      cursor: "row-resize"
    };
  } else {
    return {
      height: length + "px",
      width: RESIZE_BAR_WIDTH,
      cursor: "col-resize"
    };
  }
};
