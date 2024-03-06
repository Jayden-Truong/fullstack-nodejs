import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";

require("dotenv").config();

let app = express();

// config
viewEngine(app);
initWebRoute(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 2302;

app.listen(port, () => {
  console.log("Backend NodeJS is running on port:" + port);
});
