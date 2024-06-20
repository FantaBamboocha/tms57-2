import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "@api/api";
import { dataFetchPayload } from "@redux/index";

export const dataFetchThunk = createAsyncThunk<dataFetchPayload, void>(
  "data/dataFetch",
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
