import { LOAD_DATA, QUERYSYSTEM } from "../actions/actionTypes";

const initState = {
  data: []
};
export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, data: action.payload };
    case QUERYSYSTEM:
      return { ...state, data: action.payload.rows };
    default:
      return state;
  }
};
