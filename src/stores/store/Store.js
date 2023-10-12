import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";
import thunk from "redux-thunk";

const store = configureStore(
  {
    reducer: {
      cartslice: CartSlice.reducer,
      authentication: AuthSlice.reducer,
    },
  },
  applyMiddleware(thunk)
);
export default store;
