import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const SuggestionItem = () => {
    const list=useSelector((state) =>state.setDataReducer.result)
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
          {
              list.map((i)=>{
                return (
                    <>
                    <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={i.url} />
          </ListItemAvatar>
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
        </ListItem>
        <Divider variant="inset" component="li" />
                    </>
                )
              })
          }
        
      </List>
    </>
  );
};

export function Items() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");

  return (
    <div>
      <h1>Items page</h1>
      <p>{name}</p>
    </div>
  );
}
