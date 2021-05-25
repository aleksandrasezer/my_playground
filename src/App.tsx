import React from 'react';
import './App.css';
import {Converter} from "./converter/Converter";
import {Game} from "./game/Game";
import {ReduxCounterCont} from "./React-Redux-training/Redux_Counter";

function App() {
    return (
        <div className='field'>
            <div className='left'>
                <br/>
                <Converter/>
                <br/>
                <ReduxCounterCont />
            </div>
            <div className='right'>
                <Game/>
            </div>
        </div>
    );
}

export default App;
