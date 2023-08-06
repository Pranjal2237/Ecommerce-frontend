import { Box } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../component/layout/SideBar";
import ProductCard from "../component/layout/ProductCard";
import Pagination from "@mui/material/Pagination";

const Products = () => {
  const [newPage, setnewPage] = useState(1);
  const handlePage = (event) => {
    let page = event.target.textContent; //to get pagination value
    setnewPage(page);
  };
  console.log(newPage);

  return (
    <Box>
      <div className="container product-flex-div">
        <SideBar currentPage={newPage} />
        <ProductCard />
      </div>
      <Pagination
        count={5}
        color="secondary"
        sx={{ mt: "30px" }}
        size="large"
        onChange={(event) => handlePage(event)}
      />
    </Box>
  );
};

export default Products;
