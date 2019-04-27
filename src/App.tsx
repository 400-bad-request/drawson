import React, { useState, useEffect } from "react";
import "./App.scss";
import { ResizableBox } from "./components/ResizableBox/ResizableBox";
import { BAR_WIDTH } from "./utils/constants";
import BarType from "./utils/BarType";
import { ResizeBar } from "./components/ResizeBar/ResizeBar";

let resizingVertical = false;
let resizingHorizontal = false;
let cachedWidth: number, cachedHeight: number;
let startX: number, startY: number;

const App = () => {
  const [width, setWidth] = useState((window.innerWidth - BAR_WIDTH) / 2);
  const [height, setHeight] = useState((window.innerHeight - BAR_WIDTH) / 2);

  const setDimensions = () => {
    setWidth((window.innerWidth - BAR_WIDTH) / 2);
    setHeight((window.innerHeight - BAR_WIDTH) / 2);
  };

  const mouseDownVertical = (e: MouseEvent) => {
    cachedWidth = width;
    startX = e.clientX;
    startY = e.clientY;
    resizingHorizontal = true;
  };

  const mouseDownHorizontal = (e: MouseEvent) => {
    cachedHeight = height;
    startX = e.clientX;
    startY = e.clientY;
    resizingVertical = true;
  };

  const mouseMove = (e: MouseEvent) => {
    if (resizingVertical) {
      setHeight(cachedHeight - (startY - e.clientY));
    }
    if (resizingHorizontal) {
      setWidth(cachedWidth - (startX - e.clientX));
    }
  };

  const mouseUp = (e: MouseEvent) => {
    resizingVertical = false;
    resizingHorizontal = false;
  };

  useEffect(() => {
    window.addEventListener("resize", setDimensions);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      window.removeEventListener("resize", setDimensions);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div className="App">
      <ResizableBox width={width} height={window.innerHeight}>
        <ResizableBox
          width={width}
          height={height}
          style={{ backgroundColor: "red" }}
        />
        <ResizeBar
          length={width}
          orientation={BarType.HORIZONTAL}
          onMouseDown={mouseDownHorizontal}
        />
        <ResizableBox
          width={width}
          height={window.innerHeight - height - BAR_WIDTH}
          style={{ backgroundColor: "green" }}
        />
      </ResizableBox>
      <ResizeBar
        length={window.innerHeight}
        orientation={BarType.VERTICAL}
        onMouseDown={mouseDownVertical}
      />
      <ResizableBox
        width={window.innerWidth - BAR_WIDTH / 2 - width}
        height={window.innerHeight}
        style={{ backgroundColor: "blue" }}
      />
    </div>
  );
};

export default App;
