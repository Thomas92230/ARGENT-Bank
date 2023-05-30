import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

// state
const initialState = {
  isSucceed: false,
  firstName: "",
  lastName: "",
};

// Action creator
export const userProfilSuccess = createAction(
  "USER_PROFILE_SUCCESS",
  (data) => ({
    payload: data,
  })
);
export const userProfileFail = createAction("USER_PROFILE_FAIL", (error) => ({
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
}));
export const userProfilReset = createAction("USER_PROFILE_RESET");
export const userProfileUpdate = createAction(
  "USER_PROFILE_UPDATE",
  (data) => ({
    payload: data,
  })
);

export async function fetchProfile(store, token) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    );
    store.dispatch(userProfilSuccess(data));
  } catch (error) {
    store.dispatch(userProfileFail(error));
  }
}

export async function updateProfile(store, token, newFirstname, newLastname) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName: newFirstname, lastName: newLastname },
      config
    );

    store.dispatch(userProfileUpdate(data));
  } catch (error) {
    store.dispatch(userProfileUpdate(error));
  }
}

// Reducer
export function userReducer(state = initialState, action) {
  if (action.type === userProfilSuccess.toString()) {
    return {
      isSucceed: true,
      firstName: action.payload.body.firstName,
      lastName: action.payload.body.lastName,
    };
  }
  if (action.type === userProfileFail.toString()) {
    return { isSucceed: false, error: action.payload };
  }
  if (action.type === userProfilReset.toString()) {
    return { isSucceed: false, firstName: null, lastName: null };
  }
  if (action.type === userProfileUpdate.toString()) {
    return {
      isSucceed: true,
      firstName: action.payload.body.firstName,
      lastName: action.payload.body.lastName,
    };
  }
  return state;
}
