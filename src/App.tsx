import React from 'react';
import './App.scss';
import { PopupLayer } from './components/Popups/PopupLayer/PopupLayer';
import { EditorLayer } from './components/EditorLayer/EditorLayer';
import {Compiler} from "./compiler/Compiler";

Compiler.init();

const App = () => {
  return (
    <div className="App">
      <EditorLayer />
      <PopupLayer />
    </div>
  );
};

export default App;
