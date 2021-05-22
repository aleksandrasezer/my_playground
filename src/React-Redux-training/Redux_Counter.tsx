import React from "react";
import {store} from "./redux-store";
import {MultAC, SubAC, SumAC} from "./redux-counter-reducers";

export const ReduxCounter = () => {

    let number = JSON.stringify(store.getState().countPage.count)

    return <div>
        <h3>Redux-counter</h3>
        <div>
            <div>{number}</div>

            <div>
                <button onClick={() => store.dispatch(SumAC())}> +1 </button>
                <button onClick={() => store.dispatch(SubAC())}> -1 </button>
                <button onClick={() => store.dispatch(MultAC())}> *2 </button>
            </div>
        </div>
    </div>
}