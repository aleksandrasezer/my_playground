import React, {useState} from "react";
import {AppDispatch, RootState, store} from "./redux-store";
import {MultAC, IncAC, DecAC} from "./redux-counter-reducers";
import s from './ReduxCounter.module.css'
import {connect, useDispatch, useSelector} from "react-redux";

type PropsType = {
    count: number
    incrementF: () => void
    decrementF: () => void
    multX2: () => void
};

const ReduxCounter = (props: PropsType) => {

    return <div className={s.counterBody}>
        <h3>Redux-counter</h3>
        <div>
            <div>{props.count}</div>

            <div>
                <button onClick={() => props.incrementF()}> +1 </button>
                <button onClick={() => props.decrementF()}> -1 </button>
                <button onClick={() => props.multX2()}> *2 </button>
            </div>
        </div>
    </div>
};



let mapStateToProps = (state: RootState) => {
    return {count: state.counter.count}
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        incrementF: () => dispatch(IncAC()),
        decrementF: () => dispatch(DecAC()),
        multX2: () => dispatch(MultAC())
    }
}

export let ReduxCounterCont = connect(mapStateToProps,mapDispatchToProps)(ReduxCounter)