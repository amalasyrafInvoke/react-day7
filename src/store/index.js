import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducer/count";
import todo from "../reducer/todo";

export default configureStore({
  reducer: {
    counter: counter,
    todo: todo
  }
})