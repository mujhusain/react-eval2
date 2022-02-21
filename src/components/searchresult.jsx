import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SuggestionItem = () => {
  const list = useSelector((state) => state.setDataReducer.result);
  console.log(list);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 900,
          margin: "auto",
          bgcolor: "background.paper",
        }}
      >
        {list.map((i) => {
          return (
            <>
              <ListItem key={i.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={i.url} />
                </ListItemAvatar>
                <a href={i.url} target="blank">
                  <ListItemText
                    primary={i.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {i.author}
                        </Typography>
                        {i.description}
                      </React.Fragment>
                    }
                  />
                </a>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};
