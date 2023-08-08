import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OrderCard = ({order_id,product_id,image,name,quantity,price}) => {
  return (
    <Link
      to={`/order/${order_id}/${product_id}`}
      style={{ textDecoration: "none", color: "#151875" }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#E7E4F8",
          p: "15px",
          gap: "1rem",
          alignItems: "center",
          cursor: "pointer",
          mt: "10px",
        }}
      >
        <Box
          sx={{
            flexBasis: "15%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            p: "15px 0px",
          }}
        >
          <img
            src={`https://ecomerceserver.onrender.com/assets/${image}`}
            alt=""
            style={{ width: "90%", margin: "auto" }}
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              mt: "3px",
            }}
          >
            Quantity: {quantity}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              mt: "3px",
            }}
          >
            Price: Rs. {price}
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{
            color: "#9DA0AE",
            fontSize: "1.2rem",
            ml: "auto",
          }}
        />
      </Box>
    </Link>
  );
};

export default OrderCard;
