const express = require("express");
const bodyParser = require("body-parser");
const expHandBars = require("express-handlebars");
// Not sure if we need Path but instantiating it regardless :^)
const path = require("path");
// Importing Routes
const apiRoutes = require("./routes/apiRoutes.js");

// are const supposed to be all CAPS?




const port = process.env.PORT || 8080;
const app = express();

// Requiring our models for syncing
var db = require("./models");

app.use(express.static("public"));

// Body Parser Middle ware
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

// set up handlebars engine
app.engine('handlebars', expHandBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


 

app.use(apiRoutes);


// For sequelize we will need to wrap app.listen in db.Sync() and use a .then() promise

db.sequelize.sync({ force: true }).then(function() {
    app.listen(port, () => {
        console.log(`Server Listening on port ${port}`);
    });
});