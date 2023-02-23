import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost, IPostsState } from "../types";

const initialState: IPostsState = {
  posts: [] as IPost[],
  loading: false,
  error: false,
  deleteError: false,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (limit: number, { rejectWithValue, dispatch }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}`
    ).then((res) => res.json());
    dispatch(setPosts(res));
  }
);

export const deletePostById = createAsyncThunk(
  "posts/deletePostById",
  async (id: number, { rejectWithValue, dispatch }) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    dispatch(deletePost(id));
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [getPosts.pending.type]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getPosts.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [deletePostById.fulfilled.type]: (state) => {
      state.deleteError = false;
    },
    [deletePostById.pending.type]: (state) => {
      state.deleteError = false;
    },
    [deletePostById.rejected.type]: (state) => {
      state.deleteError = true;
    },
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
