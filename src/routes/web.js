import express from "express";
import { getHomePage, getAbout } from "../controllers/homeController";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAbout);

  return app.use("/", router);
};

module.exports = initWebRoute;
