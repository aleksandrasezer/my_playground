import React from 'react';
import './App.css';
import {Converter} from "./converter/Converter";
import {Game} from "./game/Game";
import {ReduxCounter} from "./React-Redux-training/Redux_Counter";

function App() {
  return (
      <div className='field'>
        <div className='left'>
          <Converter />
            <ReduxCounter />
        </div>
        <div className='right'>
          <Game />
        </div>
      </div>
  );
}

export default App;
