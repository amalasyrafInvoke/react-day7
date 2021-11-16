// Root reducer
import { combineReducers } from "redux";
import todo from "./todo";
import counter from "./count";

export default combineReducers({
  todo,
  counter
})