import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ContactInfo = () => {
  return (
    <Box
      marginTop="40px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "#A9ACC6",
      }}
    >
      <Box sx={{ maxWidth: "50%" }}>
        <Typography
          sx={{ fontSize: "28px", fontWeight: "700", color: "#151875" }}
        >
          Information About us
        </Typography>
        <Typography sx={{ fontSize: "14px", mt: "15px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.deleniti, aspernatur adipisci laudantium
          optio hic incidunt voluptas est quo consequuntur aliquam,
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem", mt: "35px" }}>
          <Box
            sx={{
              width: "5%",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#5625DF",
            }}
          ></Box>
          <Box
            sx={{
              width: "5%",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#FF27B7",
            }}
          ></Box>
          <Box
            sx={{
              width: "5%",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#37DAF3",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ minWidth: "40%" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#151875",
            pl: "20px",
          }}
        >
          Contact Way
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ">div": { display: "flex", flexDirection: "column" },
          }}
        >
          <Box className="flow">
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                mt: "15px",
                ">p": { fontSize: "14px" },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#5625DF",
                }}
              ></Box>
              <Typography>
                Tel:8081249719
                <br />
                Email:shop@email.com
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", gap: "1rem", ">p": { fontSize: "14px" } }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#FFB265",
                }}
              ></Box>
              <Typography>
                Gadi Bazar
                <br />
                Colonelganj,Gonda
              </Typography>
            </Box>
          </Box>
          <Box className="flow">
            <Box
              sx={{
                display: "flex",
                mt: "15px",
                gap: "1rem",
                ">p": { fontSize: "14px" },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#FB4997",
                }}
              ></Box>
              <Typography>
                Support Forum
                <br />
                Over 24hr
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", gap: "1rem", ">p": { fontSize: "14px" } }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#1BE982",
                }}
              ></Box>
              <Typography>
                Free Standerd shipping
                <br />
                on all orders
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;
