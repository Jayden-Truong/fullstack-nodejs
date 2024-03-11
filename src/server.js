import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

let app = express();

// config
viewEngine(app);
initWebRoute(app);

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 2302;

app.listen(port, () => {
  console.log("Backend NodeJS is running on port:" + port);
});
