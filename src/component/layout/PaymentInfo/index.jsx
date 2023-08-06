import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentInfo = ({ onClick, change }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pinCode: null,
    phoneNo: null,
  });

  const handleName = (e) => {
    const temp = { ...shippingInfo };
    temp.name = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handleAddress = (e) => {
    const temp = { ...shippingInfo };
    temp.address = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handleLandmark = (e) => {
    const temp = { ...shippingInfo };
    temp.landmark = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handleCity = (e) => {
    const temp = { ...shippingInfo };
    temp.city = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handleState = (e) => {
    const temp = { ...shippingInfo };
    temp.state = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handleCountry = (e) => {
    const temp = { ...shippingInfo };
    temp.country = e.target.value;
    setShippingInfo(() => ({ ...temp }));
  };

  const handlePinCode = (e) => {
    const temp = { ...shippingInfo };
    temp.pinCode = Number(e.target.value);
    setShippingInfo(() => ({ ...temp }));
  };

  const handleNumber = (e) => {
    const temp = { ...shippingInfo };
    temp.phoneNo = Number(e.target.value);
    setShippingInfo(() => ({ ...temp }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    onClick();
    change(shippingInfo);
  };

  return (
    <Box sx={{ p: "30px", background: "#fcf4fc" }}>
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Shipping Address
        </Typography>
      </Box>
      <form
        onSubmit={(e) => {
          handleShippingSubmit(e);
        }}
      >
        <Box
          sx={{
            width: "500px",
            ">input": {
              height: "35px",
              mt: "30px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
              background: "none",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={shippingInfo.name}
              onChange={(e) => {
                handleName(e);
              }}
            />
            <input
              type="text"
              placeholder="10-digit Mobile Number"
              value={shippingInfo.phoneNo}
              onChange={(e) => {
                handleNumber(e);
              }}
            />
          </Box>
          <input
            type="text"
            placeholder="Address(Area and Street)"
            value={shippingInfo.address}
            onChange={(e) => {
              handleAddress(e);
            }}
          />
          <input
            type="text"
            placeholder="Nearby Location"
            value={shippingInfo.landmark}
            onChange={(e) => {
              handleLandmark(e);
            }}
          />
          <Box
            sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              placeholder="City"
              value={shippingInfo.city}
              onChange={(e) => {
                handleCity(e);
              }}
            />
            <input
              type="text"
              placeholder="State"
              value={shippingInfo.state}
              onChange={(e) => {
                handleState(e);
              }}
            />
          </Box>
          <Box
            sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={(e) => {
                handleCountry(e);
              }}
            />
            <input
              type="text"
              placeholder="Postal Code"
              value={shippingInfo.pinCode}
              onChange={(e) => {
                handlePinCode(e);
              }}
            />
          </Box>
        </Box>
        {/* <Link to="/payment/ordered" style={{ textDecoration: "none" }}> */}
        <Button
          sx={{
            textTransform: "none",
            background: "#191970",
            color: "white",
            "&:hover": { background: "#191970" },
            mt: "30px",
          }}
          type="submit"
        >
          DELIVER HERE
        </Button>
        {/* </Link> */}
      </form>
    </Box>
  );
};

export default PaymentInfo;
