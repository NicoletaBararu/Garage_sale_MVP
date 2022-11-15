import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";

import "./Login.css";
import {
  EmailOutlined,
  PasswordOutlined,
} from "@mui/icons-material";

import { Button, InputAdornment, TextField } from "@mui/material";


const auth = getAuth(app);

const Login = ({
  setUser,
  user,
  setQueryEmail,
}) => {
  const [formData, setFormData] = useState("");

  function handleChangeForm(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
      };
    });
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSubmitToFB(event);
  };

  const handleSubmitToFB = async (event) => {
    event.preventDefault();
  
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
 

  return (
    <div>
      {user ? (
        <Navigate to={`/mypage/`} />
      ) : (
        <div className="container__login">
          <div className="container__login--left">
            <h1 className="txt__login">Log in</h1>
            <form className="container__login--form" onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChangeForm}
                label="Email"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "65%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChangeForm}
                label="Password"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "65%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "0000FF" }}
                sx={{ mt: 3, mb: 2, width: "65%" }}
              >
                Log In
              </Button>
            </form>
          </div>
          <div className="container__login--right"></div>
        </div>
      )}
    </div>
  );
};

export default Login;
