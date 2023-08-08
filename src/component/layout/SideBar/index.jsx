import React, { useEffect, useState } from "react";
import { productFilter } from "../../../data/categories";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slice/productsSlice";

const SideBar = ({ currentPage, keyword = "",setnewPage }) => {
  const [filter, setfilter] = useState({
    currentPage: currentPage,
    category:"",
    rating: 0,
    priceL: 0,
    priceH: 10000000000,
    keyword:keyword
  });
  if (keyword !== filter.keyword) {
    setfilter({ ...filter, keyword: keyword });
  }
  const [categorySelected, setCategorySelected] = useState();
  const [ratingSelected, setratingSelected] = useState();
  const [priceSelected, setpriceSelected] = useState();

  if (currentPage !== filter.currentPage) {
    setfilter({ ...filter, currentPage: currentPage });
  }

  const handleCategory = (category, idx) => {
    if (idx === categorySelected) {
      setCategorySelected(undefined);
      const temp = { ...filter };
      temp.category = "";
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    } else {
      setCategorySelected(idx);
      const temp = { ...filter };
      temp.category = category;
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    }
  };

  const handleRating = (rating, idx) => {
    if (idx === ratingSelected) {
      setratingSelected(undefined);
      const temp = { ...filter };
      temp.rating = 0;
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    } else {
      setratingSelected(idx);
      const temp = { ...filter };
      temp.rating = rating;
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    }
  };

  const handlePrice = (price, idx) => {
    if (idx === priceSelected) {
      setpriceSelected(undefined);
      const temp = { ...filter };
      temp.priceL = 0;
      temp.priceH = 1000000000;
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    } else {
      setpriceSelected(idx);
      const temp = { ...filter };
      const priceRange = price.split("-");
      temp.priceL = priceRange[0];
      temp.priceH = priceRange[1];
      temp.currentPage=1;
      setnewPage(1);
      setfilter(() => ({ ...temp }));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(filter));
  }, [filter]);

  return (
    <Box sx={{ position: "sticky", top: "0px", p: "10px 0px" }}>
      <Box
        sx={{
          ">p": {
            fontSize: "18px",
            textDecoration: "underline",
            color: "#151875",
            fontWeight: "700",
          },
        }}
      >
        <Typography>Categories</Typography>
        {productFilter.categories.map((category, idx) => {
          return (
            <Box sx={{ m: "15px 0px" }}>
              <input
                type="checkbox"
                key={category}
                checked={categorySelected === idx ? true : false}
                onChange={() => {
                  handleCategory(category, idx);
                }}
                style={{ marginRight: "10px" }}
              />
              <label style={{ fontSize: "16px", color: "#7E81A2" }}>
                {category}
              </label>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          ">p": {
            fontSize: "18px",
            textDecoration: "underline",
            color: "#151875",
            fontWeight: "700",
          },
          mt: "50px",
        }}
      >
        <Typography>Price Filter</Typography>
        {productFilter.priceRange.map((price, idx) => {
          return (
            <Box sx={{ m: "15px 0px" }}>
              <input
                type="checkbox"
                key={price}
                checked={priceSelected === idx ? true : false}
                onChange={() => {
                  handlePrice(price, idx);
                }}
                style={{ marginRight: "10px" }}
              />
              <label style={{ fontSize: "16px", color: "#7E81A2" }}>
                {price}
              </label>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          ">p": {
            fontSize: "18px",
            textDecoration: "underline",
            color: "#151875",
            fontWeight: "700",
          },
          mt: "50px",
        }}
      >
        <Typography>Ratings</Typography>
        {productFilter.rating.map((key, idx) => {
          return (
            <Box sx={{ m: "15px 0px" }}>
              <input
                type="checkbox"
                checked={ratingSelected === idx ? true : false}
                onChange={() => {
                  handleRating(key, idx);
                }}
                style={{ marginRight: "10px" }}
              />
              <Rating name="rating" value={key} readOnly fontSize="1.2rem" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
