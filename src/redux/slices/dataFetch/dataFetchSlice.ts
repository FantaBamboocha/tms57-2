import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostType, TodoType, UserType, dataFetchPayload } from "@redux/index";
import { dataFetchThunk } from "@redux/thunk/dataFetchThunk"; // не работает при реэкспорте из "@redux/index"

export type dataFetchState = {
  todos: TodoType[];
  posts: PostType[];
  users: UserType[];
  isLoading: boolean;
};

const initialState: dataFetchState = {
  todos: [],
  posts: [],
  users: [],
  isLoading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataFetchRequest: (state) => {
      state.isLoading = true;
    },
    dataFetchSuccess: (state, action: PayloadAction<dataFetchPayload>) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
      state.posts = action.payload.posts;
      state.users = action.payload.users;
    },
    dataFetchFailure: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataFetchThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        dataFetchThunk.fulfilled,
        (state, action: PayloadAction<dataFetchPayload>) => {
          state.isLoading = false;
          state.todos = action.payload.todos;
          state.posts = action.payload.posts;
          state.users = action.payload.users;
        }
      )
      .addCase(dataFetchThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { dataFetchRequest, dataFetchSuccess, dataFetchFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
