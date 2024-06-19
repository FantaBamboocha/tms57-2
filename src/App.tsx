import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  useAppDispatch,
  dataFetchThunk,
  filteredDataSelector,
} from "@redux/index";
import Search from "@components/Search";

function App() {
  const dispatch = useAppDispatch();
  const { filteredTodos, filteredPosts, filteredUsers } =
    useSelector(filteredDataSelector);

  useEffect(() => {
    dispatch(dataFetchThunk());
  }, []);

  return (
    <>
      <Search></Search>
      <div style={{ display: "flex" }}>
        <div>
          TODOS:
          <ul>
            {filteredTodos.map((todo) => (
              <li>{todo.title}</li>
            ))}
          </ul>
        </div>
        <div>
          POSTS:
          <ul>
            {filteredPosts.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul>
        </div>
        <div>
          USERS:
          <ul>
            {filteredUsers.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
