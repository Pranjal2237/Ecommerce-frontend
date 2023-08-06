import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { aboutContent } from "../../../data/aboutcontent";

const AboutCard = () => {
  return (
    <Stack justifyContent="center" alignItems="center" marginTop="2.5em">
      <Stack direction="row" gap="3em">
        {aboutContent.map((card) => {
          return (
            <Box
              sx={{
                maxWidth:"270px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                p: "20px",
              }}
            >
              <Box sx={{ width: "115px", height: "85px" }}>
                <img
                  src={card.image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bolder",fontSize:"14px",color:"#151875" }}>
                  {card.name}
                </Typography>
                <Typography sx={{fontSize:"13px",color:"#7E81A2"}}>{card.description}</Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default AboutCard;
