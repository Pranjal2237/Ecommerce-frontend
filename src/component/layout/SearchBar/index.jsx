import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slice/productsSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setkeyword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const check = {
      currentPage: 1,
      rating: 0,
      priceL: 0,
      priceH: 10000000000,
      keyword: keyword,
    };
    dispatch(getProducts(check));
    navigate("/products");
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      sx={{
        borderRadius: "0px",
        border: "1px solid #e3e3e3",
        minWidth: "250px",
        pl: 2,
        boxShadow: "none",
        display: "flex",
        flexBasis: "30%",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={keyword}
        style={{ border: "none", outline: "none", flexGrow: "1" }}
        onChange={(e) => {
          setkeyword(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#fff",
          background: "#FB2E86",
          borderRadius: "0px",
          height: "40px",
          "&:hover":{
            background:"#FB2E86"
          }
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
