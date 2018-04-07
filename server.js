"use strict";
// Setup Express
const express = require("express");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const expHandBars = require("express-handlebars");
// Not sure if we need Path but instantiating it regardless :^)
const path = require("path");
// Importing Routes
const apiRoutes = require("./routes/apiRoutes.js");

// are const supposed to be all CAPS?


const port = process.env.PORT || 8080;
=======
>>>>>>> 19805208e3eb4bdf8e5d0b87039419b9be2402c3
const app = express();
app.use(express.static("public"));
// Setup Body Parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// Setup Handlebars Engine
const exphandbars = require("express-handlebars");
app.engine("handlebars", exphandbars({defaultLayout: "main"}));
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
