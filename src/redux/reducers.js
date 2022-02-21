import { SET_DATA, SET_SEARCH_RESULT, SET_SEARCH_QUERY } from "./actionTypes";
const init = {
  query: '',
  data: [],
  result: [],
};

export const setDataReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return { ...state, data: payload };
    case SET_SEARCH_QUERY:
      return { ...state, query: payload };
    case SET_SEARCH_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
};
