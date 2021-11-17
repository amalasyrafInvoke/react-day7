// Root reducer
import { combineReducers } from "redux";
import todo from "./todo";
import counter from "./count";
import login from './login';
import register from "./register";

export default combineReducers({
  todo,
  counter,
  login,
  register
})