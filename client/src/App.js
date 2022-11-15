import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Header";
import Mypage from "./components/Mypage";

function App() {

  const [user, setUser] = useState("");
  const [queryEmail, setQueryEmail] = useState("");

  return (
    <div className="App">
      <h1>Garage Sale</h1>

      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path={`/home`} element={<Home />} />
            <Route
              path={"/signup/"}
              element={
                <Signup
                  user={user}
                  setUser={setUser}
                  setQueryEmail={setQueryEmail}
                />
              }
            />
            <Route
              path={"/login/"}
              element={
                <Login
                  user={user}
                  setUser={setUser}
                  setQueryEmail={setQueryEmail}
                />
              }
            />
            <Route
              path={"/mypage/"}
              element={
                <Mypage
                  user={user}
                  setUser={setUser}
                  queryEmail={queryEmail}
                />
              }
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
