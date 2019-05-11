import React from 'react';
import './App.scss';
import { PopupLayer } from './components/Popups/PopupLayer/PopupLayer';
import { EditorLayer } from './components/EditorLayer/EditorLayer';
// @ts-ignore
import grammarUrl from './grammar.ohm';
import { Compilator } from './utils/Compilator';
import ohm from 'ohm-js';

fetch(grammarUrl)
  .then(r => r.text())
  .then(grammar => {
    Compilator.grammar = ohm.grammar(grammar);
  });

const App = () => {
  return (
    <div className="App">
      <EditorLayer />
      <PopupLayer />
    </div>
  );
};

export default App;
