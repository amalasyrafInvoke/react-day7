import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    randomColor: [255, 255, 255],
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    changeColor: (state, action) => {
      state.randomColor = action.payload;
    }
  },
});

export const { increment, decrement, changeColor } = counterSlice.actions;

export default counterSlice.reducer;
