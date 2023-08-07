import { Box } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../component/layout/SideBar";
import ProductCard from "../component/layout/ProductCard";
import Pagination from "@mui/material/Pagination";

const Products = ({keyword}) => {
  const [newPage, setnewPage] = useState(1);
  console.log(newPage);
  const handlePage = (event) => {
    let page = event.target.textContent; //to get pagination value
    setnewPage(page);
  };

  return (
    <Box>
      <div className="container product-flex-div">
        <SideBar currentPage={newPage} keyword={keyword} setnewPage={setnewPage} />
        <ProductCard />
      </div>
      <Pagination
        count={5}
        sx={{ mt: "30px" }}
        size="large"
        onChange={(event) => handlePage(event)}
        page={newPage}
        color="secondary"
      />
    </Box>
  );
};

export default Products;
