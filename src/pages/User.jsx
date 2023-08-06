import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import EditProfile from "../component/layout/EditProfile";
import Overview from "../component/layout/Overview";

import UserSideBar from "../component/layout/UserSideBar";

const User = () => {
  const [ndex, setNdex] = useState({ idx: 0, index: 0 });

  const handleComponent = (ndex) => {
    setNdex(() => ({ ...ndex }));
  };
  console.log(ndex);

  const state = useSelector((state) => state);

  return (
    <Box sx={{ m: "auto", width: "980px", mt: "40px" }}>
      <Box sx={{ p: "15px 0px", borderBottom: "1px solid #d4d5d9" }}>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "800", color: "#151875" }}
        >
          Account
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#A9ACC6" }}>
          {state?.userLogin?.data?.user.name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <UserSideBar handleComponent={handleComponent} changeIndex={ndex} />
        <Box sx={{ p: "20px" }}>
          {ndex.index === 0 && ndex.idx === 0 && (
            <Overview handleComponent={handleComponent} />
          )}
          {ndex.index === 2 && ndex.idx === 0 && <EditProfile />}
          {/* {ndex.index==1 && ndex.idx==0 && (<Link to='/user/order'/>)} */}
        </Box>
        {/* <PrivacyPolicy/>
    <TermOfUse/> */}
      </Box>
    </Box>
    // {/* <Box>
    // </Box> */}
  );
};

export default User;
