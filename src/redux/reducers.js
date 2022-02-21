import { SET_DATA, GET_SEARCH_DATA } from "./actionTypes";

export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return [...state, ...payload];

    case GET_SEARCH_DATA:
      return ["result"];
    default:
      return state;
  }
};
