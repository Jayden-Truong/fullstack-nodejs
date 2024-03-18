import express from "express";
import {
  getHomePage,
  getAbout,
  getCRUD,
  postCRUD,
  displayGetCRUD,
} from "../controllers/homeController";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAbout);
  router.get("/crud", getCRUD);

  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);

  return app.use("/", router);
};

module.exports = initWebRoute;
