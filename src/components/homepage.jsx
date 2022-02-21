import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedData } from "../redux/actions";
import { useSelector } from "react-redux";
import { AlignItemsList } from "./searchresult";

export const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  console.log(data);

  const [text, setText] = useState("");

  const searchText = () => {
    let url = new URL('https://example.com/search?q="text');
    let params = new URLSearchParams(url.search);
    params.append("q", text);
    console.log(params);

    const result = data.filter((a) => a.title == text);
    console.log("searchResult:", result);
    {
      result.map((a) => {
        // <AlignItemsList avtarimages={a.url} title={a.title} author={a.author} desc={a.description} />
      });
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "4rem" }}>Google-2</h1>
      <TextField
        className="search-box"
        id="filled-basic"
        onChange={(e) => setText(e.target.value)}
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
    </div>
  );
};
