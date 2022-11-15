import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import "./Signup.css";
import {
  EmailOutlined,
  PasswordOutlined,
  AccountCircle,
} from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";

const Signup = ({ setUser, user, setQueryEmail }) => {
  const [formData, setFormData] = useState("");
  console.log(formData);

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitToFB(event);
  };

  const handleSubmitToFB = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      //console.log(formData.email);
      //console.log(formData.password)
    } catch (error) {
      alert(error);
    }
  };
 

  return (
    <div>
      {user ? (
        <Navigate to={"/mypage/"} />
      ) : (
        <div>
          <div className="container__signup">
            <div className="container__signup--left">
              <h1 className="txt__register">Create account</h1>
              <form
                className="container__register--form"
                onSubmit={handleSubmit}
              >
                <TextField
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChangeForm}
                  label="First Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "65%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChangeForm}
                  label="Last Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "65%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChangeForm}
                  label="Username"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "65%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
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
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Signup;
