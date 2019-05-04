import React from 'react'
import './App.scss'
import {PopupLayer} from "./components/PopupLayer/PopupLayer";
import {EditorLayer} from "./components/EditorLayer/EditorLayer";

const App = () => {
  return (
    <div className="App">
        <EditorLayer/>
        <PopupLayer/>
    </div>
  )
}

export default App
