import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@redux/index";

const searchSelector = (state: RootState) => state.search.searchValue;
const todosSelector = (state: RootState) => state.data.todos;
const postsSelector = (state: RootState) => state.data.posts;
const usersSelector = (state: RootState) => state.data.users;

const filteredTodosSelector = createSelector(
  [todosSelector, searchSelector],
  (todos, searchValue) => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
);

const filteredPostsSelector = createSelector(
  [postsSelector, searchSelector],
  (posts, searchValue) => {
    return posts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
);

const filteredUsersSelector = createSelector(
  [usersSelector, searchSelector],
  (users, searchValue) => {
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
);

export const filteredDataSelector = createSelector(
  [filteredTodosSelector, filteredPostsSelector, filteredUsersSelector],
  (filteredTodos, filteredPosts, filteredUsers) => {
    return {
      filteredTodos,
      filteredPosts,
      filteredUsers,
    };
  }
);
