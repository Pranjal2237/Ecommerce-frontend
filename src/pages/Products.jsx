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
    <Box sx={{display:"flex",flexDirection:"column"}}>
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
        sx={{m:"auto",mt: "30px"}}
        size="large"
        shape="rounded"
        color='secondary'
      />
    </Box>
  );
};

export default Products;
