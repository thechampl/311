const express = require("express");
const router = express.Router();

// The default route will not be the registatrtionForm file
// Used this file to test handlebars connection and route connection
router.get('/', function (req, res) {
    res.render('registrationForm');
});


module.exports = router