import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "@mui/icons-material";
import { addCart, deleteCart } from "../../../redux/slice/loginSlice";
import CancelIcon from "@mui/icons-material/Cancel";

const CartTable = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChange = (e, product_id) => {
    dispatch(addCart({ quantity: e.target.value, product_id }));
  };

  const handleDelete = (cart_id) => {
    console.log(cart_id);
    dispatch(deleteCart(cart_id));
  };

  return (
    <Box sx={{ flexBasis: "50%" }}>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                ">th": {
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#151875",
                },
              }}
            >
              <TableCell sx={{ p: "16px 0px" }}>Product</TableCell>
              <TableCell sx={{ p: "16px 0px", minWidth: "100px" }}>
                Price
              </TableCell>
              <TableCell sx={{ p: "16px 0px", minWidth: "100px" }}>
                Quantity
              </TableCell>
              <TableCell
                sx={{ p: "16px 0px", minWidth: "100px", textAlign: "right" }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state?.userLogin?.data?.user.cartItems.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row" sx={{ p: "16px 0px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "30%",
                        display: "flex",
                        position: "relative",
                        backgroundColor: "#F5F5F5",
                        p: "15px 0px",
                      }}
                    >
                      <CancelIcon
                        sx={{
                          cursor: "pointer",
                          position: "absolute",
                          left: "94%",
                          bottom: "90%",
                          fontSize: "1rem",
                        }}
                        onClick={() => {
                          handleDelete(row._id);
                        }}
                      />
                      <img
                        src={`http://localhost:4000/assets/${row.images[0].public_id}`}
                        alt=""
                        width="80%"
                        style={{ margin: "auto" }}
                      />
                    </Box>
                    <Typography sx={{ color: "#A1A8C1" }}>
                      {row.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#15245E",
                    fontSize: "12px",
                    fontWeight: "600",
                    p: "16px 0px",
                    textAlign: "left",
                  }}
                >
                  Rs. {row.price}
                </TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    value={row.quantity}
                    defaultValue={row.quantity}
                    onChange={(e) => {
                      handleChange(e, row.product_id);
                    }}
                    style={{ width: "50px", outline: "none", height: "20px" }}
                  />
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#15245E",
                    fontSize: "12px",
                    fontWeight: "600",
                    p: "16px 0px",
                    textAlign: "right",
                  }}
                >
                  Rs. {row.quantity * row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTable;
