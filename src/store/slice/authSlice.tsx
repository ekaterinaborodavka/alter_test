import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../types";

const initialState: IAuthState = {
  auth: Boolean(localStorage.getItem("token")),
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    authUser(state) {
      state.auth = true;
    },
  },
});

export const { authUser } = authUserSlice.actions;
export default authUserSlice.reducer;
