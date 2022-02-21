import { SET_DATA } from "./actionTypes";
import { GET_SEARCH_DATA } from "./actionTypes";

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const getSearchedData = (payload) => {
    //write searching code hare
  return {
    type: GET_SEARCH_DATA,
    payload,
  };
};
