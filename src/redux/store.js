import { createStore } from "redux";
import { setDataReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    setDataReducer
});

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
