import { Box } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../component/layout/SideBar";
import ProductCard from "../component/layout/ProductCard";
import Pagination from "@mui/material/Pagination";

const Products = ({ keyword }) => {
  const [newPage, setnewPage] = useState(1);
  const handleChange = (event, value) => {
    setnewPage(value);
  };

  return (
    <Box>
      <div className="container product-flex-div">
        <SideBar
          currentPage={newPage}
          keyword={keyword}
          setnewPage={setnewPage}
        />
        <ProductCard />
      </div>
      <Pagination
        count={5}
        page={newPage}
        onChange={handleChange}
        sx={{ mt: "30px", borderRadius: "4px" }}
        size="large"
        color="secondary"
      />
    </Box>
  );
};

export default Products;
