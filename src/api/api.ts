import { API_URLS } from "./config";
import { TodoType, PostType, UserType } from "@redux/index";
import fetchData from "@utils/fetchData";

export const api = {
  todosRequest: () => fetchData<TodoType>(API_URLS.TODOS),

  postsRequest: () => fetchData<PostType>(API_URLS.POSTS),

  usersRequest: () => fetchData<UserType>(API_URLS.USERS),
};
