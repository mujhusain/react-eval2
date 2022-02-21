import { createStore } from "redux";
import {reducer} from "./reducers"
import { combineReducers } from "redux";


const reducers=combineReducers({
    reducer
})

export const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())