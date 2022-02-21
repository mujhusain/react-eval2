import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SuggestionItem } from "./searchresult";
import { useDispatch } from "react-redux";
import { setQuery, setResult } from "../redux/actions";

export const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.setDataReducer.data);

  const [query, setQuerytext] = useState("");

  const searchText = () => {
    let list = data.filter((a) => a.title == query);
    dispatch(setQuery(query));
    dispatch(setResult(list));
  };

  return (
    <div>
      <h1 style={{ fontSize: "4rem" }}>Google-2</h1>
      <TextField
        className="search-box"
        id="filled-basic"
        onChange={(e) => {
          setQuerytext(e.target.value);
        }}
        label="Search Hare"
        variant="filled"
      />

      <Button
        className="search"
        onClick={() => searchText()}
        style={{ height: "52px" }}
        variant="contained"
        size="large"
      >
        Search
      </Button>
      <br></br>
      <p>Search Result can see below!</p>
      <SuggestionItem />
    </div>
  );
};
