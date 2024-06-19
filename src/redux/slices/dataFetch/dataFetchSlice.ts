import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { api } from "@api/api";
import { PostType, TodoType, UserType, dataFetchPayload } from "@redux/index";

type dataFetchState = {
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

export const dataFetchThunk = createAsyncThunk<dataFetchPayload, void>(
  "data/fetchData",
  async () => {
    try {
      // Есть сомнения по поводу использования блока try-catch, т.к. Promise.allSettled вернет ошибку в
      // массив результатов запроса, что далее обрабаьтывается в тернарнике
      const [todosResponse, postsResponse, usersResponse] =
        await Promise.allSettled([
          api.todosRequest(),
          api.postsRequest(),
          api.usersRequest(),
        ]);

      const todos =
        todosResponse.status === "fulfilled" ? todosResponse.value : [];
      const posts =
        postsResponse.status === "fulfilled" ? postsResponse.value : [];
      const users =
        usersResponse.status === "fulfilled" ? usersResponse.value : [];

      return { todos, posts, users };
    } catch (error) {
      console.log(error);
      return { todos: [], posts: [], users: [] };
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
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

export default dataSlice.reducer;
