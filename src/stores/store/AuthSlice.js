import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Await, useLoaderData } from "react-router-dom";

const authInitialstate = {
  user_accounts: [],
  isLogin: false,
  activeUser: {},
  loading: false,
};
export const getData = createAsyncThunk("userData/getUserData", async () => {
  try {
    const response = await fetch(
      "https://65227fe0f43b17938414903d.mockapi.io/user"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
});
// export const postData = createAsyncThunk("postUserData", async (userData) => {
//   try {
//     const response = await fetch(
//       "https://65227fe0f43b17938414903d.mockapi.io/user",
//       {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: { contentType: "application/json" },
//       }
//     );
//     if (!response.ok) {
//       throw new Error();
//     }
//     const data = await response.json();
//   } catch (error) {
//     console.log(error.message());
//   }
// });
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
        id: Date.now(),
      };
      state.user_accounts = [...state.user_accounts, userData];
    },
    login(state, action) {
      state.activeUser = action.payload;
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
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
