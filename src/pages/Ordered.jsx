import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import clock from "../assets/images/clock.png";
import checklist from "../assets/images/checklist.png";

const Ordered = () => {
  return (
    <Box>
      <Box
        className="container"
        sx={{
          maxWidth: "50%",
          pb: "30px",
          borderBottom: "1px dotted #8D92A7",
          borderLeft: "1px dotted #8D92A7",
          m: "60px auto",
          position: "relative",
        }}
      >
        <Box sx={{ width: "20%", m: "auto" }}>
          <TaskAltIcon
            sx={{
              color: "#FF1788",
              width: "25%",
              objectFit: "cover",
              height: "70px",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              mb: "15px",
              color: "#101750",
            }}
          >
            Your Order is Completed!
          </Typography>
          <Typography
            sx={{
              maxWidth: "70%",
              m: "auto",
              fontSize: "13px",
              color: "#8D92A7",
              fontWeight: "500",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
            est quo consequuntur aliquam.
          </Typography>
        </Box>
        <Link to="/login">
          <Button
            sx={{
              textTransform: "none",
              background: "#FF1788",
              color: "white",
              "&:hover": { background: "#FF1788" },
              mt: "15px",
            }}
          >
            Continue Shopping
          </Button>
        </Link>
        <img
          src={clock}
          alt=""
          style={{
            position: "absolute",
            maxWidth: "8%",
            right: "96%",
            bottom: "76%",
          }}
        />
        <img
          src={checklist}
          alt=""
          style={{
            position: "absolute",
            maxWidth: "7%",
            top: "88%",
            left: "95%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Ordered;
