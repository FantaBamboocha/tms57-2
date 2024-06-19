import axios from "axios";

import { API_URLS } from "./config";
import { TodoType, PostType, UserType } from "@redux/index";

export const api = {
  todosRequest: async (): Promise<TodoType[]> => {
    try {
      const response = await axios(API_URLS.TODOS);

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch todos");
    }
  },
  postsRequest: async (): Promise<PostType[]> => {
    try {
      const response = await axios(API_URLS.POSTS);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch posts");
    }
  },
  usersRequest: async (): Promise<UserType[]> => {
    try {
      const response = await axios(API_URLS.USERS);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch users");
    }
  },
};
