import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../redux/slice/orderSlice";
import emptyWishlist from "../assets/images/emptywishlist.jpg";
import EmptyItem from "../component/layout/EmptyItem";
import OrderCard from "../component/layout/OrderCard";

const Order = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <Box>
      <Box className="container" sx={{ maxWidth: "60%" }}>
        {state?.order?.data?.order?.length > 0 ? (
          <Box sx={{ m: "40px 0px", textAlign: "left" }}>
            <Typography
              sx={{ color: "#151875", fontSize: "18px", fontWeight: "600" }}
            >
              All Orders
            </Typography>
            {state?.order?.data?.order.map((items) => (
              <Box sx={{}}>
                {items.orderItems.map((item) => (
                  <Box
                    sx={{
                      backgroundColor: "#EEEFFB",
                      m: "30px 0px",
                      p: "25px",
                      boxSizing: "border-box",
                      color: "#151875",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                      {items.orderStatus}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#A1A8C1",
                      }}
                    >
                      {items.paidAt}
                    </Typography>
                    <OrderCard
                      order_id={items._id}
                      product_id={item._id}
                      image={item.images[0].public_id}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        ) : (
          <EmptyItem
            image={emptyWishlist}
            title="Your Orderlist is empty!"
            description="Add items that you like. Review them anytime and easily."
            maxwidth="50%"
          />
        )}
      </Box>
    </Box>
  );
};

export default Order;
