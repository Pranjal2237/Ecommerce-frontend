import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductInfo = () => {
  return (
    <Box sx={{ mt: "20px", color: "#A9ACC6" }}>
      <Box sx={{ ">p": { mt: "10px" }, mt: "10px" }}>
        <Typography
          color="#151875"
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          Various tempor
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          impedit quisquam corrupti itaque delectus saepe inventore eveniet
          nulla facere quaerat reiciendis nesciunt voluptas mollitia maiores,
          iure aliquam assumenda deleniti consequuntur!
        </Typography>
      </Box>
      <Box marginTop="30px" sx={{ ">div": { mt: "5px" } }}>
        <Typography
          color="#151875"
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          More details
        </Typography>
        <Box sx={{ display: "flex", ">p": { ml: "5px" } }}>
          <ArrowForwardIcon color="#151875" />
          <Typography sx={{ fontSize: "13px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </Box>
        <Box sx={{ display: "flex", ">p": { ml: "5px" } }}>
          <ArrowForwardIcon color="#151875" />
          <Typography sx={{ fontSize: "13px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </Box>
        <Box sx={{ display: "flex", ">p": { ml: "5px" } }}>
          <ArrowForwardIcon color="#151875" />
          <Typography sx={{ fontSize: "13px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </Box>
        <Box sx={{ display: "flex", ">p": { ml: "5px" } }}>
          <ArrowForwardIcon color="#151875" />
          <Typography sx={{ fontSize: "13px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
