import { combineReducers } from "redux";
import tap from "./tap";
import modal from "./modal";

const rootReducer = combineReducers({ tap, modal });

export default rootReducer;
