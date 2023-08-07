import { Stack, Box, Typography, Button } from "@mui/material";
import React from "react";
import contact from "../../../assets/images/contactimage.png";

const ContactMail = () => {
  return (
    <Stack
      direction="row"
      marginTop="70px"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        mb: "50px",
      }}
    >
      <Box sx={{ flexBasis: "100%" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            mb: "20px",
            color: "#151875",
          }}
        >
          Get In Touch
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#A9ACC6" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.
        </Typography>
        <form style={{ padding: "25px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                pl: "10px",
                borderColor: "#A9ACC6",
                borderRadius: "3px",
              },
            }}
          >
            <Box
              sx={{
                ">input": {
                  height: "35px",
                  minWidth: "230px",
                  outline: "none",
                  pl: "10px",
                  borderColor: "#A9ACC6",
                  borderRadius: "3px",
                },
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <input type="text" placeholder="Your Name*" />
              <input type="email" placeholder="Your Email*" />
            </Box>
            <input type="text" placeholder="Subject*" />
            <textarea
              type="text"
              placeholder="Type Your Message*"
              style={{
                minHeight: "100px",
                marginTop: "30px",
                padding: "15px",
                outline: "none",
                boxSizing: "border-box",
                borderColor: "#A9ACC6",
                borderRadius: "3px",
              }}
            />
          </Box>
          <Button
            sx={{
              textTransform: "none",
              "&:hover": { background: "#FB4997" },
              background: "#FB4997",
              color: "white",
              mt: "25px",
            }}
          >
            Send Mail
          </Button>
        </form>
      </Box>
      <Box sx={{ flexBasis: "100%", display: "flex" }}>
        <img
          src={contact}
          alt=""
          style={{ width: "90%", objectFit: "cover", margin: "auto" }}
        />
      </Box>
    </Stack>
  );
};

export default ContactMail;
