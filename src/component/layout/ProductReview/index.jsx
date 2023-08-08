import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { reviewProduct } from "../../../redux/slice/singleProductSlice";
import { useParams } from "react-router-dom";

const ProductReview = () => {
  const [open, setopen] = useState(false);
  const [rating, setrating] = useState();
  const [comment, setcomment] = useState("");
  const{id}=useParams();

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setopen(false);
    dispatch(reviewProduct({ rating, comment,id }));
    if (state?.singleProduct?.data.success === true) {
      alert(
        `${state?.userLogin?.data.user.name}'s feedback added Successfully`
      );
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          mt: "10px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "17px", fontWeight: "700", color: "#151875" }}
        >
          Ratings & Reviews
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#FB4997",
            p: "7px 15px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "500",
            "&:hover": { backgroundColor: "#FB4997" },
          }}
          onClick={() => {
            setopen(!open);
          }}
        >
          Rate Product
        </Button>
      </Stack>
      {open && (
        <Box
          sx={{
            mt: "30px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            p: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "600", color: "#151875" }}
              >
                Rate Here:
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                size="large"
                sx={{ ml: "10px" }}
                onChange={(event, newValue) => {
                  setrating(newValue);
                }}
              />
            </Box>
            <textarea
              placeholder="Comment Your Feedback..."
              style={{
                width: "100%",
                height: "100px",
                marginTop: "15px",
                outline: "none",
                padding: "10px",
                boxSizing: "border-box",
              }}
              value={comment}
              onChange={(e) => {
                setcomment(e.target.value);
              }}
            ></textarea>
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                background: "#FB4997",
                color: "white",
                mt: "15px",
                fontSize: "14px",
                fontWeight: "500",
                p: "7px 15px",
                "&:hover": { background: "#626262" },
              }}
            >
              Submit Here
            </Button>
          </form>
        </Box>
      )}
      <Box sx={{ mt: "15px" }}>
        {!open &&
          state?.singleProduct?.data.pro.reviews.slice(0, 4).map((user) => {
            return (
              <Box sx={{ borderBottom: "1px solid #E6E6E6", p: "10px 0px" }}>
                <Rating name="read-only" value={user.rating} readOnly fontSize="1.2rem" />
                <Typography sx={{ fontSize: "13px", color: "#A9ACC6" }}>
                  {user.comment}
                </Typography>
                <Typography
                  sx={{ fontSize: "11px", mt: "3px", color: "#808080" }}
                >
                  {user.name}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default ProductReview;
