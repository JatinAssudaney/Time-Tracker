import { FETCH_TIMERS } from "../actions/types";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIMERS:
      return payload;
    default:
      return state;
  }
};
