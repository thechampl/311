// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
// router.get("/", (req,res) => res.render('registrationForm'));

router.get("/", function (req, res) {
  db.Department.findAll({}).then(function (data) {
    res.render("index", { departments: data });
  });
});

//GET - Form Data
router.get("/api/departments", function (req, res) {
  db.Department.findAll({
  }).then(function (dbDepartment) {
    res.json(dbDepartment);
  });
});

router.get("/api/departments/:id", function (req, res) {
  db.Department.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Request]
  }).then(function (dbDepartment) {
    res.json(dbDepartment);
  });
});

router.get("/api/questions/:id", function (req, res) {
  db.Question.findAll({
    where: {
      requestId: req.params.id
    }
  }).then(function (dbQuestion) {
    res.json(dbQuestion);
  });
});


// POST - User Data
router.post("/userData", (req, res) => console.log(req.body));
// Export Router
module.exports = router;

//click new ticket
//opens modal but also makes an ajax call that gets the departments and then adds those departemnts to the department dropdown
//on dropdown change (department dropdown) make another ajax request which gives the department id and returns "REQuests"
//the requrest drop down becomes enabled with all the requests loaded into the dropdown
//on change of request dropdown, we make an ajax call to get the questions passing request id
//on return we render the questions and input boxes
//makes a post request to create a ticket, userid, requestid, comment from comment box and then (still on the server side) now we have a ticket, we also sent over the answers
//if validation errors show errors in modal
//then reload the page/rerender the page