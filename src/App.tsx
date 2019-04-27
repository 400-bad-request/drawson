import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="half-window" style={{ backgroundColor: "purple" }}>
          <div
            className="horizontal-window"
            style={{ backgroundColor: "red" }}
          />
          <div
            className="horizontal-window"
            style={{ backgroundColor: "brown" }}
          />
        </div>
        <div className="half-window" style={{ backgroundColor: "yellow" }} />
      </div>
    );
  }
}

export default App;
