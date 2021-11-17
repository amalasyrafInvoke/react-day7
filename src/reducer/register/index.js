import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registeredUsers: [],
  },
  reducers: {
    register: (state, action) => {
      if (
        !state.registeredUsers.find(
          (user) => user.email === action.payload.email
        )
      ) {
        state.registeredUsers = [
          ...state.registeredUsers,
          {
            email: action.payload.email,
            name: action.payload.name,
            password: action.payload.password,
          },
        ];
      }
    },
  },
});

export const { register } = registerSlice.actions;

export default registerSlice.reducer;
