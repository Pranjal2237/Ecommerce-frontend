import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../redux/slice/singleProductSlice";
import { useParams } from "react-router-dom";
import { addCart } from "../../../redux/slice/loginSlice";
import { newWishList } from "../../../redux/slice/WishListSlice";

const SingleProductInformation = () => {
  const dispat = useDispatch();
  const { id } = useParams(); //use to get id of the product from url
  useEffect(() => {
    dispat(getSingleProduct(id));
  }, []);

  const product = useSelector((state) => state?.singleProduct);

  const handleCart = (product_id) => {
    dispat(addCart({ quantity: 1, product_id }));
    alert(`${product?.data?.pro.name} is added to your cart`);
  };

  const handleWishList = (product_id) => {
    dispat(newWishList(product_id));
    alert(`${product?.data?.pro.name} is added to your wishList`);
  };

  return (
    <Box
      className="container singleProductInfo-main-div"
      sx={{ maxWidth: "60%" }}
    >
      <Box
        sx={{ width: "30%", flexShrink: "0", minHeight: "350px" }}
        className="singleProduct-img-div"
      >
        <img
          src={`http://localhost:4000/assets/${product?.data?.pro.images[0].public_id}`}
          alt=""
          style={{ width: "90%", objectFit: "cover", margin: "auto" }}
        />
      </Box>
      <Box sx={{ flexBasis: "50%", color: "#151875" }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "700", color: "#0D134E" }}
        >
          {product?.data?.pro.name}
        </Typography>
        <Rating
          name="rating"
          value={product?.data?.pro.rating}
          readOnly
          sx={{ mt: "7px" }}
        />
        <Typography
          sx={{
            color: "#151875",
            fontWeight: "600",
            fontSize: "14px",
            mt: "7px",
          }}
        >
          Category:
          <span style={{ color: "#7E81A2" }}>
            {product?.data?.pro.category}
          </span>
        </Typography>
        <Typography sx={{ fontWeight: "600", fontSize: "16px", mt: "7px" }}>
          Rs. {product?.data?.pro.price}
        </Typography>
        <Typography sx={{ color: "#A9ACC6", fontSize: "13px", mt: "7px" }}>
          {product?.data?.pro.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "230px",
            justifyContent: "flex-start",
            mt: "7px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            Status :
          </Typography>
          {product?.data?.pro.stock > 0 ? (
            <Typography
              sx={{ color: "green", fontSize: "14px", fontWeight: "600" }}
            >
              In Stock
            </Typography>
          ) : (
            <Typography
              sx={{ color: "red", fontSize: "14px", fontWeight: "600" }}
            >
              Unavailable
            </Typography>
          )}
        </Box>
        <Box sx={{ alignItems: "center", mt: "7px" }}>
          <Button
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "white",
              background: "#191970",
              "&:hover": { background: "#191970" },
              p: "7px 15px",
            }}
            onClick={() => {
              handleCart(product?.data?.pro._id);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductInformation;
