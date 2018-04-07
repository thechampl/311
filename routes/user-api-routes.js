const express = require("express");
const router = express.Router();

// The default route will not be the registatrtionForm file
// Used this file to test handlebars connection and route connection
router.get("/", (req, res) => {
    res.render('registrationForm');
});

router.post("/userData", (req, res) => {
    // This route is working. req.body is recieving the userData object
    console.log(req.body);
    // need to add this data to our DB
})

module.exports = router