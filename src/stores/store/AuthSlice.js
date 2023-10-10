import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";

const authInitialstate = {
  user_accounts: [
    { name: "parameswar", email: "test@test1.com", password: "1234" },
  ],
  isLogin: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialstate,
  reducers: {
    Signin(state, action) {
      //   console.log(action.payload);
      let userData = {
        name: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };

      state.user_accounts = [...state.user_accounts, userData];
    },
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    getData(state, action) {
      console.log(action);
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
