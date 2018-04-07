// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
router.get("/register", (req,res) => res.render('registrationForm'));

// GET - Landing Page
router.get("/", (req,res) => res.render('index'));

// GET - Dashboard
// router.get("/dashboard", (req,res) => res.render('dashboard'));




// POST-USER TICKET
router.post("/userTickets", (req,res) => {
  console.log(req.body);
});


// POST - User Data
router.post("/userData", (req,res) => {
  console.log(req.body);
});


  // PUT route for updating posts
  router.put("/userTickets", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // DELETE route for deleting tickets
  router.delete("/userTickets:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });



// Export Router
module.exports = router;