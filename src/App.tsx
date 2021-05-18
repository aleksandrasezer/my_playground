import React from 'react';
import './App.css';
import {Converter} from "./converter/Converter";
import {Game} from "./game/Game";

function App() {
  return (
      <div className='field'>
        <div className='left'>
          <Converter />
        </div>
        <div className='right'>
          <Game />
        </div>
      </div>
  );
}

export default App;
