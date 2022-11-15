const express = require("express");
const path = require("path");
const db = require("../db/knex");

//const userController = require("../db/seeds/src/user/user.controller");

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.status(200).send("hello world");
  });

  app.post("/signup", async (req, res) => {
    const payload = req.body;
    try {
      const user = await db("user_info")
        .select("*")
        .from("user_info")
        .insert(payload);
      res.status(200).send(payload);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get("/signup", (req, res) => {
    const payload = req.body;
    res.status(200).send(payload);
  });

  // User routes
  //app.get("/api/user", userController.index);

  return app;
}

module.exports = setupServer;
