import React from "react";
import { Box } from "@mui/system";
import playStore from "../../../assets/images/playstore.png";
import appStore from "../../../assets/images/Appstore.png";
import { Typography, Stack, Button, styled } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const SignUpBtn = styled(Button)({
    background:'#FB2E86',
    color:'#EEEFFB',
    fontSize:'0.75rem',
    textTransform:'capitalize',
    padding:'0.3em 1.4em',
    '&:hover':{
      background:'#FB2E86',
      color:'#EEEFFB',
    }
  })
  const linksData = [
    {
      title:'Catagories',
      subLinks:[
        "Laptops & Computers",
        "Cameras & Photography",
        "Smart Phones & Tablets",
        "Video Games & Consoles",
        "Waterproof Headphones"
      ]
    },
    {
      title:'Customer Care',
      subLinks:[
        "My Account",
        "Discount",
        "Returns",
        "Orders History",
        "Order Tracking"
      ]
    },
    {
      title:'Pages',
      subLinks:[
        "Blog",
        "Browse the Shop",
        "Category",
        "Pre-Built Pages",
        "Visual Composer Elements",
        "WooCommerce Pages"
      ]
    },
  ]
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: "#EEEFFB",
        justifyContent: "space-around",
        mt: "40px",
        color: "#000000",
      }}
    >
    <Box display={'flex'} justifyContent='space-around' width={'100%'} p={2} sx={{">p":{color:'#8A8FB9'},paddingBlock:'2em'}}> 
      <Box sx={{ ">p": { p: "10px",color:'#8A8FB9' } }}>
        <Box
          component={'h1'}
          sx={{ fontSize: "2rem", fontWeight: "bold", color: "#000000",marginTop:'0.2em' }}
          mb={2}
        >
          Ecommerce
        </Box>
        <Box mb={1.5}>
          <Box sx={{background:'#FFFFFF',p:'0.25em',borderRadius:'5px',width:'fit-content'}}>
            <input type="text" placeholder="Enter Email Address" style={{height:'2em',minWidth:'220px',border:'none',outline:'transparent',paddingLeft:'1em',color:'#8A8FB9',fontSize:'0.75rem'}} />
            <SignUpBtn>Sign Up</SignUpBtn>
          </Box>
        </Box>
        <Typography color='#8A8FB9' fontSize='0.8rem'>
          Contact Info
          <br />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </Typography>
      </Box>
      <Box
        sx={{ ">p": { p: "10px" }, ">div": { p: "5px" } }}
        display='flex'
        gap={{lg:6,md:5,sm:4,xs:2}}
      >
      {linksData.map((item,index)=>(
        <Box key={index} display='flex' flexDirection='column' gap={1.8} fontFamily="'Josefin Sans', sans-serif">
          <Typography variant="h6">{item.title}</Typography>
          <Box>
            {item.subLinks.map((itm,idx)=>(
              <Typography key={idx} marginBottom={1} color='#8A8FB9' fontSize='0.8rem'>
                {itm}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
      </Box>
      </Box>
      <Box display={'flex'} alignItems='center' bgcolor={'#E7E4F8'} justifyContent={'space-between'} width='100%' sx={{paddingInline:'10%'}} minHeight='3.2em'>
        <Typography color={'#9DA0AE'} fontSize={{xs:'0.7rem',md:'0.8rem'}}>©Webecy - All Rights Reserved</Typography>
        <Box display={'flex'} alignItems='center' gap={2} sx={{">a":{color:'var(--text-color)',">svg":{fontSize:'1.25rem',}}}}>
            <Box component={'a'} href='#facebook'><FacebookRoundedIcon/></Box>
            <Box component={'a'} href='#instagram'><InstagramIcon/></Box>
            <Box component={'a'} href='#twitter'><TwitterIcon/></Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Footer;
