import db from "../models/index";
import { createNewUser, getAllUser } from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getAbout = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await createNewUser(req.body);
  console.log(message);
  return res.send("Post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await getAllUser();
  return res.render("displayCRUD.ejs", { data: data });
};
module.exports = { getHomePage, getAbout, getCRUD, postCRUD, displayGetCRUD };
