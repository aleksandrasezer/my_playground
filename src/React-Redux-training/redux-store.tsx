import {combineReducers, createStore} from "redux";
import {counterReducer} from "./redux-counter-reducers";

let reducers = combineReducers({
    countPage: counterReducer
})

export let store = createStore(reducers)

export type StoreType = typeof store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch