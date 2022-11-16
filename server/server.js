const express = require("express");
const path = require("path");
const db = require("../db/knex");
const cors = require("cors");
const mutler = require("multer");
const { ref, uploadBytes, listAll, deleteObject } = require("firebase/storage");
const storage = require("../client/src/firebase");
//const initializeApp = require("firebase/app");

//const userController = require("../db/seeds/src/user/user.controller");

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(express.json());
  app.use(cors());

  //multer
  const memoryStore = mutler.memoryStorage();
  const upload = mutler({ memoryStore });

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

  //add a product
/*
  app.post("/addProduct", upload.single("image"), async (req, res) => {
    const img = req.file;
    console.log(img);
    const imageRef = ref(storage, img.originalname);
    const metatype = { contentType: img.mimetype, name: img.originalname };
    await uploadBytes(imageRef, img.buffer, metatype)
      .then((snapshot) => {
        res.status(200).send("uploaded");
      })
      .catch((err) => res.status(500).send(err));
  });

  //get all products

  app.get("/products", async (req, res) => {
    const prodRef = ref(storage);
    let productPics = [];
    await listAll(prodRef)
      .then((prod) => {
        productPics = prod.items.map((img) => {
          console.log(img);
          const publicUrl = " garage-sale-3ebe1.appspot.com";
          return {
            url: publicUrl,
            name: item._location.path_,
          };
        });
        res.status(200).send(productPics);
      })
      .catch((error) => res.status(500).send(error));
  });

  //delete a product

  app.delete("/delete", async (req, res) => {
    const deleteProduct = req.body.name;
    const deleteRef = ref(storage, deleteProduct);
    await deleteObject(deleteRef)
      .then(() => {
        res.status(200).send("Product deleted");
      })
      .catch((err) => res.status(500).send(err));
  });
*/
  // User routes
  //app.get("/api/user", userController.index);

  return app;
}

module.exports = setupServer;
