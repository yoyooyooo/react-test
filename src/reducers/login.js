import { LOGIN } from "../actions/actionTypes";

const initState = {
  isLogged: false
};
export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true
      };
    default:
      return state;
  }
};
