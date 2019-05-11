import React, { useState, useEffect } from 'react'
import './RootBox.scss'
import { ResizableBox } from '../ResizableBox/ResizableBox'
import { CodeEditor } from '../CodeEditor/CodeEditor'
import { CodeDisplay } from '../CodeDisplay/CodeDisplay'
import { ResizeBar } from '../ResizeBar/ResizeBar'
import { CanvasDisplay } from '../CanvasDisplay/CanvasDisplay'
import {Settings} from "../../settings/Settings";
import BarType from "../../utils/types/BarType";

let resizingVertical = false
let resizingHorizontal = false
let cachedWidth: number, cachedHeight: number
let startX: number, startY: number

const RootComponent = () => {
  const [width, setWidth] = useState((window.innerWidth - Settings.RESIZE_BAR_WIDTH) / 2)
  const [height, setHeight] = useState(
      (window.innerHeight - Settings.RESIZE_BAR_WIDTH - Settings.NAVIGATION_BAR_HEIGHT) / 2
  )

  const setDimensions = () => {
    setWidth((window.innerWidth - Settings.RESIZE_BAR_WIDTH) / 2)
    setHeight(
        (window.innerHeight - Settings.RESIZE_BAR_WIDTH - Settings.NAVIGATION_BAR_HEIGHT) / 2
    )
  }

  const mouseDownVertical = (e: MouseEvent) => {
    cachedWidth = width
    startX = e.clientX
    startY = e.clientY
    resizingHorizontal = true
  }

  const mouseDownHorizontal = (e: MouseEvent) => {
    cachedHeight = height
    startX = e.clientX
    startY = e.clientY
    resizingVertical = true
  }

  const mouseMove = (e: MouseEvent) => {
    if (resizingVertical) {
      setHeight(cachedHeight - (startY - e.clientY))
    }
    if (resizingHorizontal) {
      setWidth(cachedWidth - (startX - e.clientX))
    }
  }

  const mouseUp = (e: MouseEvent) => {
    resizingVertical = false
    resizingHorizontal = false
  }

  useEffect(() => {
    window.addEventListener('resize', setDimensions)
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseup', mouseUp)
    return () => {
      window.removeEventListener('resize', setDimensions)
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseup', mouseUp)
    }
  }, [])

  return (
    <div className="RootBox">
      <ResizableBox
          width={width}
          height={window.innerHeight - Settings.NAVIGATION_BAR_HEIGHT}
      >
        <CodeEditor width={width} height={height} />
        <ResizeBar
          length={width}
          orientation={BarType.HORIZONTAL}
          onMouseDown={mouseDownHorizontal}
        />
        <CodeDisplay
          width={width}
          height={
            window.innerHeight -
            height -
            Settings.NAVIGATION_BAR_HEIGHT -
            Settings.RESIZE_BAR_WIDTH
          }
        />
      </ResizableBox>
      <ResizeBar
          length={window.innerHeight - Settings.NAVIGATION_BAR_HEIGHT}
          orientation={BarType.VERTICAL}
          onMouseDown={mouseDownVertical}
      />
      <ResizableBox
          width={window.innerWidth - Settings.RESIZE_BAR_WIDTH / 2 - width}
          height={window.innerHeight - Settings.NAVIGATION_BAR_HEIGHT}
      >
        <CanvasDisplay
            width={window.innerWidth - Settings.RESIZE_BAR_WIDTH / 2 - width}
            height={window.innerHeight - Settings.NAVIGATION_BAR_HEIGHT}
        />
      </ResizableBox>
    </div>
  )
}

export default RootComponent
