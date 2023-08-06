import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import about from "../../../assets/images/about.png";


const AboutInfo = () => {
    const StyledButton = styled(Button)({
        color:'#FFFFFF',
        background:'#FB2E86',
        textTransform:"none",
        '&:hover':{
            background:'#FB2E86'
        },
        marginTop:'40px'
    })
  return (
    <Stack direction="row" sx={{ mt: "60px",alignItems:'center'}}>
      <Box sx={{flexBasis:"100%"}}>
        <img src={about} alt="" style={{ width: "85%", objectFit: "cover" }} />
      </Box>
      <Box sx={{flexBasis:"100%",textAlign:"left"}}>
        <Typography sx={{fontSize:'28px',fontWeight:'700',mb:'15px',color:"#151875"}}>
          Know About Our Eccomerce
          <br />
          Bussiness,History
        </Typography>
        <Typography sx={{fontSize:"14px",color:"#A9ACC6"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam. deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam
        </Typography>
        <StyledButton>Contact Us</StyledButton>
      </Box>
    </Stack>
  );
};

export default AboutInfo;
