import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardTotal from "../component/layout/CardTotal";
import CartTable from "../component/layout/CartTable";
import EmptyItem from "../component/layout/EmptyItem";
import emptyCart from "../assets/images/emptyCart.png";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState({});

  const state = useSelector((state) => state);

  const totalCount = (info) => {
    setCartTotal(info);
  };

  return (
    <Box>
    <Box className="container" sx={{display:"flex",justifyContent:"space-between",alignItems:"start",mt:"40px",mb:"40px"}}>
      {state?.userLogin?.data?.user.cartItems.length > 0 ? (
        <CartTable />
      ) : (
        <EmptyItem
          image={emptyCart}
          title="Hey,it feels so light!"
          description="There is nothing in your cart,Let's add some items"
          buttonContent="Add Items from WishList"
          navigation="/user/wishlist"
          maxwidth="30%"
        />
      )}

      {state?.userLogin?.data?.user.cartItems.length > 0 && (
        <Box
          textAlign="center"
          sx={{
            ">p": { fontWeight: "bolder" },
            ">a": { textDecoration: "none" },
            flexBasis:"30%",
            position:"sticky",
            top:"0"
          }}
        >
          <Typography sx={{color:"#1D3178",fontWeight:"600",fontSize:"14px"}}>Cart Totals</Typography>
          <CardTotal totalCount={totalCount} />
          <Link to="/payment">
            <Button
              sx={{
                textTransform: "none",
                background: "#FB2E86",
                color: "white",
                "&:hover": { background: "#FB2E86" },
                mt: "30px",
                width: "100%",
              }}
            >
              PLACE ORDER
            </Button>
          </Link>
        </Box>
      )}
    </Box>
    </Box>
  );
};

export default Cart;
