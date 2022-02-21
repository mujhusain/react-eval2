import { SET_DATA } from "./actionTypes";
import { SET_SEARCH_QUERY, SET_SEARCH_RESULT } from "./actionTypes";

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const setQuery = (payload) => {
    return {
      type: SET_SEARCH_QUERY,
      payload,
    };
  };

export const setResult = (payload) => {
    //write searching code hare
  return {
    type: SET_SEARCH_RESULT,
    payload,
  };
};
