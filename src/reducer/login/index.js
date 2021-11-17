import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    name: '',
    isAuthenticated: false,
  },
  reducers: {
    loginAction: (state, action) => {
      state.email = action.payload.loginData.email;
      state.password = action.payload.loginData.password;

      const foundUser = action.payload.userList.find(user => user.email === state.email);
      console.log(foundUser);
      if (foundUser && foundUser.password === state.password) {
        state.isAuthenticated = true;
        state.name = foundUser.name;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = '';
      state.email = '';
      state.password = '';
    }
  }
});

export const { loginAction, logout } = loginSlice.actions;

export default loginSlice.reducer;