import React, { useState } from "react";
import "./App.scss";
import { ResizableBox } from "./components/ResizableBox/ResizableBox";
import { BAR_WIDTH } from "./utils/constants";
import BarType from "./utils/BarType";
import { ResizeBar } from "./components/ResizeBar/ResizeBar";

const App = () => {
  const [width, setWidth] = useState((window.innerWidth - BAR_WIDTH) / 2);
  const [height, setHeight] = useState((window.innerHeight - BAR_WIDTH) / 2);

  return (
    <div className="App">
      <ResizableBox width={width} height={window.innerHeight}>
        <ResizableBox
          width={width}
          height={height}
          style={{ backgroundColor: "red" }}
        />
        <ResizeBar length={width} orientation={BarType.HORIZONTAL} />
        <ResizableBox
          width={width}
          height={window.innerHeight - height - BAR_WIDTH}
          style={{ backgroundColor: "green" }}
        />
      </ResizableBox>
      <ResizeBar length={window.innerHeight} orientation={BarType.VERTICAL} />
      <ResizableBox
        width={window.innerWidth - BAR_WIDTH / 2 - width}
        height={window.innerHeight}
        style={{ backgroundColor: "blue" }}
      />
    </div>
  );
};

export default App;
