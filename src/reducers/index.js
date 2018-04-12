import { combineReducers } from "redux";
import login from "./login";
import homepage from "./homepage";
import manage from "./manage";

export default combineReducers({ login, homepage, manage });
