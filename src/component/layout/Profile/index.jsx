import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { profile } from "../../../data/profilecontent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/slice/loginSlice";

const Profile = () => {
  const [open, setopen] = useState(false);

  const dispatch=useDispatch();

  const handleLogout=(key)=>{
    if(key==='Log Out')
    {
      console.log('checked logout')
      dispatch(logoutUser());
    }
    setopen(false);
  }

  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        src="/assets/ecommerce_images/1.jpg"
        onClick={() => {
          setopen(!open);
        }}
        sx={{ cursor: "pointer" }}
      />
      {open && (
        <Box
          position="fixed"
          top={0}
          bottom={0}
          left={0}
          right={0}
          onClick={() => {
            setopen(false);
          }}
        />
      )}
      <Box
        sx={{
          background: "white",
          position: "absolute",
          display: open ? "block" : "none",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          mt: "10px",
          "&::before": {
            contents: "",
            position: "absolute",
            background: "black",
            top: "0",
            right: "50%",
            borderWidth: "5px",
            BorderStyle: "solid",
            borderRadius: "transparent transparent black transparent",
            height: "0px",
            width: "0px",
          },
        }}
      >
        <ul style={{ listStyle: "none", padding: "20px 40px" }}>
        {profile.map((option)=>{
          return(
            <li
                style={{
                  margin: "10px 0px",
                  borderBottom: "1px solid black",
                  paddingBottom: "5px",
                  width: "100%",
                }}
              >
             
                <Link to={option.src} style={{ textDecoration: "none" }}>
                  <Box sx={{ display: "flex",alignItems:'center' }} >
                    {option.icon}
                    <Button sx={{textTransform:'none',ml: "5px"}} onClick={()=>(handleLogout(option.type))} >
                    <Typography
                      sx={{ fontSize: "15px", fontWeight: "700" }}
                    >
                      {option.type}
                    </Typography>
                    </Button>
                  </Box>
                </Link>
              </li>
          )
        })}
        </ul>
      </Box>
    </Box>
  );
};

export default Profile;
