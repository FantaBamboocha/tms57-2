import { FC } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import { PostType, TodoType, UserType } from "@redux/index";

type ContentItemProps = {
  text?: string;
  list: TodoType[] | PostType[] | UserType[];
};

const ContentItem: FC<ContentItemProps> = ({ text = "", list }) => {
  return (
    <Box>
      <Typography variant="h4" component="p">
        {text}
      </Typography>
      {
        <List disablePadding>
          {list.map((item, id) => (
            <ListItem disablePadding divider key={id}>
              <ListItemText>
                {"title" in item ? item.title : item.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      }
    </Box>
  );
};

export default ContentItem;
