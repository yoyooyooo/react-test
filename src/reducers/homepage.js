import { CLICK_PARENT, FETCH_LIST } from "../actions/actionTypes";

const initState = {
  lists: [],
  fetching: false,
  fetched: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_LIST.FETCH_LIST_START: {
      return { ...state, fetching: true };
    }
    case FETCH_LIST.RECEIVE_LIST: {
      //能展开的加个isActive属性，默认false
      const listAddActive = action.payload.map(
        (a, i) => (a.CATEGORY === "W" ? { ...a, isActive: false } : a)
      );
      return { ...state, fetching: false, fetched: true, lists: listAddActive };
    }
    case FETCH_LIST.FETCH_LIST_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case CLICK_PARENT: {
      const tempLists = state.lists.map(
        (a, i) => (a.ID === action.id ? { ...a, isActive: !a.isActive } : { ...a, isActive: false })
      );
      return {
        ...state,
        lists: tempLists
      };
    }
    default:
      return state;
  }
};
