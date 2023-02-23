import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./slice/authSlice";
import postsReducer from "./slice/postSlice";

export const store = configureStore({
  reducer: {
    authUser: userReducer,
    posts: postsReducer,
  },
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
