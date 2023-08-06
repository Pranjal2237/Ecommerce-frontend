import React, { useEffect } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllWishList } from "../redux/slice/WishListSlice";
import { deleteWishList } from "../redux/slice/WishListSlice";
import EmptyItem from "../component/layout/EmptyItem";
import emptyWishlist from "../assets/images/emptywishlist.jpg";
import SliderCard from "../component/layout/SliderCard";
import CancelIcon from "@mui/icons-material/Cancel";

const WishList = () => {
  const dispatch = useDispatch();

  const [dataLoaded, setDataLoaded] = React.useState(false);
  console.log(dataLoaded);

  const handleDelete = (product_id) => {
    dispatch(deleteWishList(product_id));
    setDataLoaded(!dataLoaded);
    dispatch(getAllWishList());
  };
  const userWishList = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getAllWishList());
  }, [dataLoaded]);

  return (
    <Box>
      <Box className="container" sx={{ maxWidth: "80%" }}>
        {userWishList?.data?.products?.length === 0 ? (
          <EmptyItem
            image={emptyWishlist}
            title="Your Wishlist is empty!"
            description="Add items that you like to your wishlist. Review them anytime and easily move them to the bag."
            buttonContent="Continue Shopping"
            navigation="/products"
            maxwidth="50%"
          />
        ) : (
          <Box sx={{ m: "40px 0px" }}>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#111C85",
                fontWeight: "700",
                mb: "40px",
              }}
            >
              My WishList
            </Typography>
            <Box sx={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              {userWishList?.data?.products &&
                userWishList?.data?.products.map((wishlist) => {
                  return (
                    <Box sx={{ position: "relative" }}>
                      <SliderCard
                        image={`http://localhost:4000/assets/${wishlist.wishListProduct.images[0].public_id}`}
                        Product={wishlist.wishListProduct.name}
                        price={wishlist.wishListProduct.price}
                      />
                      <CancelIcon
                        sx={{
                          position: "absolute",
                          left: "95%",
                          bottom: "96%",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleDelete(wishlist._id);
                        }}
                      />
                    </Box>
                  );
                })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WishList;
