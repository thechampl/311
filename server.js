"use strict";
// Setup Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// Setup Body Parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Setup Handlebars Engine
const exphbs = require("express-handlebars");
const helpers = require("handlebars-helpers")();
const hbs = exphbs.create({
  defaultLayout: "main",
  helpers: helpers
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Import Routes
const routes = require("./controllers/311_controller");
app.use("/", routes);

// Setup Database
const PORT = process.env.PORT || 8080;
const db = require("./models");
db.sequelize.sync().then(() =>
  app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))
);