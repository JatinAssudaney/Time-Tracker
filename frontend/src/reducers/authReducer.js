import { FETCH_USER } from "../actions/types";
const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
};
