import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'to-do',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addList: (state, action) => {
    //   state.list = [...state.list, action.payload];
    // }
    addList: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    addList_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list = [...state.list, action.payload];
    },
    addList_FAIL: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    deleteSingleList: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteSingleList_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const filteredList = state.list.filter(
        (item) => item.key !== action.payload
      );
      state.list = filteredList;
    },
    deleteSingleList_FAIL: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const {
  addList,
  addList_FAIL,
  addList_SUCCESS,
  deleteSingleList,
  deleteSingleList_FAIL,
  deleteSingleList_SUCCESS,
} = toDoSlice.actions;

export default toDoSlice.reducer;
