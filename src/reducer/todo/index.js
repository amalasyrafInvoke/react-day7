import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'to-do',
  initialState: {
    list: []
  },
  reducers: {
    addList: (state, action) => {
      state.list = [...state.list, action.payload];
    }
  }
});

export const { addList } = toDoSlice.actions;

export default toDoSlice.reducer;