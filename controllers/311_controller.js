// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
router.get("/", (req,res) => res.render('registrationForm'));

//GET - Form Data
router.get("/api/departments", function(req, res) {
    db.Department.findAll({
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
});

router.get("/api/departments/:id", function(req, res) {
    db.Department.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Request]
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    });
});

router.get("/api/questions/:id", function(req, res) {
    db.Question.findAll({
      where: {
        requestId: req.params.id
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
});


// POST - User Data
router.post("/userData", (req,res) => console.log(req.body));
// Export Router
module.exports = router;