import express from "express";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello World");
  });
  return app.use("/", router);
};

module.exports = initWebRoute;
