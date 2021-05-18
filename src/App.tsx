import React from 'react';
import './App.css';
import {Converter, Right} from "./converter/Converter";

function App() {
  return (
      <div className='field'>
        <div className='left'>
          <Converter />
        </div>
        <div className='right'>
          <Right />
        </div>
      </div>
  );
}

export default App;
