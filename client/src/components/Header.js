import React from "react";
import "./Header.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, MenuItem, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar style={{ backgroundColor: "white" }} position="fixed">
      <Toolbar>
        <h1 className="header__name">Garage Sale</h1>
        <MenuItem sx={{ ml: "auto" }}>
          <Link to="/signup/">
            <Button
              variant="outlined"
              style={{ color: "#023047", borderColor: "#023047" }}
            >
              Signup
            </Button>
          </Link>
          <Link to="/login/">
            <Button
              variant="outlined"
              style={{ color: "#023047", borderColor: "#023047" }}
            >
              Log In
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Logout />
        </MenuItem>
        <MenuItem>
          <Link to="/mypage/">
            <Button
              variant="outlined"
              style={{ color: "#023047", borderColor: "#023047" }}
            >
              My Page
            </Button>
          </Link>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
