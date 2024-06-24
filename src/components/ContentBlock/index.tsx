import { filteredDataSelector } from "@redux/index";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import { useAppDispatch, dataFetchThunk, dataFetchRequest } from "@redux/index";
import ContentItem from "@components/ContentItem";
import { useEffect } from "react";

const ContentBlock = () => {
  const dispatch = useAppDispatch();
  const { filteredTodos, filteredPosts, filteredUsers } =
    useSelector(filteredDataSelector);

  const random = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    random % 2 === 0
      ? dispatch(dataFetchRequest())
      : dispatch(dataFetchThunk());
  }, []);

  return (
    <Grid container spacing={3} sx={{ alignItems: "start" }}>
      <Grid item xs={12} md={6}>
        <ContentItem text="TODOS" list={filteredTodos} />
      </Grid>
      <Grid item xs={12} md={6} container spacing={3}>
        <Grid item xs={12}>
          <ContentItem text="USERS" list={filteredUsers} />
        </Grid>
        <Grid item xs={12}>
          <ContentItem text="POSTS" list={filteredPosts} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentBlock;
