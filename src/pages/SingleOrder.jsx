import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder } from "../redux/slice/orderSlice";
import { useParams } from "react-router-dom";
import OrderCard from "../component/layout/OrderCard";

const SingleOrder = () => {
  const { order_id, product_id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSingleOrder({ order_id, product_id }));
  }, [order_id,product_id]);
  const orderData = useSelector((state) => state?.order);

  return (
    <Box>
      {
        orderData.data?.product && (
          <Box
        className="container"
        sx={{ maxWidth: "60%", display: "flex", flexDirection: "column",mt:"30px" }}
      >
        <Box
          sx={{
            backgroundColor: "#EEEFFB",
            p: "30px",
            color: "#111C85",
            m: "15px 0px",
          }}
        >
          <Box
            sx={{
              width: "35%",
              m: "auto",
              backgroundColor: "#F5F5F5",
              p: "35px 0px",
              display: "flex",
            }}
          >
            <img
              src={`https://ecomerceserver.onrender.com/assets/${orderData?.data?.product[0]?.images[0].public_id}`}
              alt=""
              style={{ width: "85%", margin: "auto" }}
            />
          </Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "700", mt: "20px" }}>
            {orderData?.data?.product[0].name}
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "700" }}>
            Quantity: {orderData?.data?.product[0].quantity}
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "700" }}>
            Price: {orderData?.data?.product[0].price}
          </Typography>
          <Box
            sx={{
              backgroundColor: "#FB2E86",
              textAlign: "left",
              p: "15px",
              mt: "20px",
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: "15px", fontWeight: "700" }}
            >
              {orderData?.data?.order?.orderStatus}
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: "600", color: "#A1A8C1" }}>
              {orderData?.data?.order.paidAt}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            backgroundColor: "#EEEFFB",
            p: "30px",
            color: "#111C85",
            m: "15px 0px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
            Delivery Address
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: "700", mt: "10px" }}>
            {orderData?.data?.order.shippingInfo?.name} |{" "}
            {orderData?.data?.order.shippingInfo?.phoneNo}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "500", mt: "3px" }}>
            {orderData?.data?.order.shippingInfo?.address},{" "}
            {orderData?.data?.order.shippingInfo?.city}-
            {orderData?.data?.order.shippingInfo?.pinCode}
          </Typography>
        </Box>
        {orderData?.data?.otherProducts.length > 0 && (
          <Box sx={{ m: "30px 0px", textAlign: "left" }}>
            <Typography
              sx={{ fontSize: "17px", fontWeight: "600", color: "#151875" }}
            >
              Other items in this order
            </Typography>
            <Box>
              {orderData?.data?.otherProducts.map((item) => (
                <OrderCard
                  order_id={order_id}
                  product_id={item._id}
                  image={item.images[0].public_id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
        )
      }
    </Box>
  );
};

export default SingleOrder;
