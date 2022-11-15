import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import { Button } from "@mui/material";

const auth = getAuth(app);

export default function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };
  return (
    <Button
      variant="outlined"
      onClick={logout}
      style={{ color: "#023047", borderColor: "#023047" }}
    >
      Log Out
    </Button>
  );
}
