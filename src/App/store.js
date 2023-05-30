import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/login";
import { userReducer } from "../features/user";

export const store = configureStore({
  reducer: {
    userLogin: loginReducer,
    userProfile: userReducer,
  },
});
