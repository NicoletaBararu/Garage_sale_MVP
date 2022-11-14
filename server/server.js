const express = require("express");
const path = require('path');
const db = require("../db/knex");

const userController = require("../db/seeds/src/user/user.controller");

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.status(200).send("hello world");
  });

  // User routes
  app.get("/api/user", userController.index);

  return app;
}

module.exports = setupServer;
