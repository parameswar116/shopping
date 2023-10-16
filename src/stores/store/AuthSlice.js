import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Await, useLoaderData } from "react-router-dom";

const authInitialstate = {
  user_accounts: [
    { name: "parameswar", email: "test@test1.com", password: "1234" },
  ],
  isLogin: false,
  loading: false,
};
export const getData = createAsyncThunk("userData/getUserData", async () => {
  try {
    const response = await fetch(
      "https://65227fe0f43b17938414903d.mockapi.io/user"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
  }
});
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
    loadData(state, action) {
      // console.log(action.payload);
      // const userData = action.payload;
      state.user_accounts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.user_accounts = payload;
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});
export const authActions = authSlice.actions;
export default authSlice;
