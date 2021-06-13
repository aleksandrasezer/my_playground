import React from 'react';
import './App.css';
import {Converter} from "./converter/Converter";
import {Game} from "./game/Game";
import {ReduxCounterCont} from "./React-Redux-training/Redux_Counter";
import {Dogs} from "./dogs/dogs";

function App() {
    return (
        <div className='field'>
            <div className='left'>
                <br/>
                <Converter/>
                <br/>
                <ReduxCounterCont />
                <Dogs />
            </div>
            <div className='right'>
                <Game/>
            </div>
        </div>
    );
}

export default App;
