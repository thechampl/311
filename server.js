"use strict";
<<<<<<< HEAD

=======
>>>>>>> 875683fb189c43061950b68c4ab28f1b6487895c
// Setup Express
const express = require("express");
const app = express();
app.use(express.static("public"));
// Setup Body Parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// Setup Handlebars Engine
<<<<<<< HEAD
const exphbs = require("express-handlebars");
var hbs = exphbs.create({
	defaultLayout: 'main',
	// helpers: helpers,
	partialsDir: [
		'shared/templates/',
		'views/partials/'
	]
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

	// Import Routes
=======
const exphandbars = require("express-handlebars");
app.engine("handlebars", exphandbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import Routes
>>>>>>> 875683fb189c43061950b68c4ab28f1b6487895c
const routes = require("./controllers/311_controller");
app.use("/", routes);
// Setup Database
const PORT = process.env.PORT || 8080;
const db = require("./models");
db.sequelize.sync().then(() =>
<<<<<<< HEAD
	app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))
);
=======
    app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))
);
>>>>>>> 875683fb189c43061950b68c4ab28f1b6487895c
