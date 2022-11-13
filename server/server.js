const express = require("express");

const app = express();

const userController = require("../src/user/user.controller");

function setupServer() {
  //middleware
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.status(200).send("hello world");
  });

  // User routes
  app.get("/api/user", userController.index);
  //app.post("api/user/save", userController.save);

  return app;
}

module.exports = setupServer;
