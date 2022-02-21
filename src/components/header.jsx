import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setData} from '../redux/actions'

export const Navbar = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    axios.get("https://fast-reef-22226.herokuapp.com/data").then((res) => {
      dispatch(setData(res.data));
    //   console.log(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="navbar">
      <h4>Search Engine</h4>
      <hr />
    </div>
  );
};
