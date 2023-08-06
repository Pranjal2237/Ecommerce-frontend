import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser, updateUser } from "../../../redux/slice/loginSlice";

const EditProfile = () => {
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleName = (e) => {
    const temp = { ...profile };
    temp.name = e.target.value;
    setProfile(() => ({ ...temp }));
  };

  const handleEmail = (e) => {
    const temp = { ...profile };
    temp.email = e.target.value;
    setProfile(() => ({ ...temp }));
  };

  const handlePassword = (e) => {
    const temp = { ...profile };
    temp.password = e.target.value;
    setProfile(() => ({ ...temp }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(profile));
    setClicked(true);
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [clicked]);

  return (
    <Box
      sx={{
        p: "50px 0px",
        width: "740px",
        boxSizing: "border-box",
        boxShadow: "#d4d5d9 0px 1px 4px",
      }}
    >
      <Box sx={{ maxWidth: "80%", m: "auto" }}>
        <Box
          sx={{
            p: "15px 0px",
            ">p": { fontSize: "20px" },
            borderBottom: "1px solid #d4d5d9",
          }}
        >
          <Typography
            sx={{ color: "#151875", fontWeight: "600", fontSize: "14px" }}
          >
            Edit Details
          </Typography>
        </Box>
        <Box
          sx={{
            m: "25px 0px",
            p: "12px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #d4d5d9",
          }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box
              sx={{
                ">input": {
                  width: "100%",
                  height: "20px",
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                  background: "white",
                },
                border: "solid 1px #d4d5d9",
                p: "12px",
                m: "20px 0px",
              }}
            >
              <input
                type="text"
                placeholder="Edit Name..."
                value={profile.name}
                onChange={(e) => handleName(e)}
              />
            </Box>
            <Box
              sx={{
                ">input": {
                  width: "100%",
                  height: "20px",
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                  background: "white",
                },
                border: "solid 1px #d4d5d9",
                p: "12px",
                m: "20px 0px",
              }}
            >
              <input
                type="email"
                placeholder="Edit Email..."
                value={profile.email}
                onChange={(e) => handleEmail(e)}
              />
            </Box>
            <Box
              sx={{
                ">input": {
                  width: "100%",
                  height: "20px",
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                  background: "white !important",
                  "&:focus": { background: "white" },
                },
                border: "solid 1px #d4d5d9",
                p: "12px",
                m: "20px 0px",
              }}
            >
              <input
                type="password"
                placeholder="Enter Your Password"
                value={profile.password}
                onChange={(e) => handlePassword(e)}
              />
            </Box>
            <Button
              type="submit"
              sx={{
                width: "100%",
                background: "#FB4997",
                fontWeight: "600",
                color: "white",
                "&:hover": { background: "#FB4997" },
              }}
            >
              Save Details
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
