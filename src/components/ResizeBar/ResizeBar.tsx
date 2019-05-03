import React, {FunctionComponent} from 'react'
import BarType from '../../data/BarType'
import './ResizeBar.scss'
import {Settings} from "../../settings/Settings";

interface Props {
  orientation: BarType
  length: number
  onMouseDown?: any
  onMouseMove?: any
  onMouseUp?: any
}

export const ResizeBar: FunctionComponent<Props> = ({
  orientation,
  length,
  onMouseUp,
  onMouseDown,
  onMouseMove,
}) => {
  return (
    <div
      className="resize-bar"
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      style={getStyle(orientation, length)}
    />
  )
};

const getStyle = (orientation: BarType, length: number) => {
  if (orientation === BarType.HORIZONTAL) {
    return {
      width: length + 'px',
      height: Settings.RESIZE_BAR_WIDTH,
      cursor: 'row-resize',
    }
  } else {
    return {
      height: length + 'px',
      width: Settings.RESIZE_BAR_WIDTH,
      cursor: 'col-resize',
    }
  }
}
