// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
router.get("/register", (req, res) => res.render('registrationForm'));

// GET - Landing Page
router.get("/", (req, res) => res.render('index'));

// GET - Dashboard
// router.get("/dashboard", (req,res) => res.render('dashboard'));

// GET - SETTINGS
// router.get("/settings", (req,res) => res.render('settings'));





// POST - User Data
router.post("/userData", function (req, res) {
    // const userToAdd = req.body.
    db.User.create({
        createdAt: new Date(), updatedAt: 0,
        firstName: req.body.firstNameval,
        lastName: req.body.lastNameVal,
        userType: "Citizen",
        homePhone: req.body.phoneNumVal,
        workPhone: req.body.workPhoneVal,
        email: req.body.emailVal,
        street: req.body.streetVal,
        city: req.body.cityVal,
        state: req.body.stateVal,
        zip: req.body.zipVal
    }).then(res.redirect("/"))

});

router.post("/userTicket", function (req, res) {
    // const userToAdd = req.body.
    db.Ticket.create({
        createdAt: new Date(), updatedAt: 0,
        comments: req.body.commentsVal,
        street: req.body.streetVal,
        city: req.body.cityVal,
        state: req.body.stateVal,
        zip: req.body.zipVal
    }).then(res.redirect("/"))

});


// PUT route for updating tickets
router.put("/userTickets", function (req, res) {
    db.Ticket.update(
        { status: req.body.status, updatedAt: new Date() }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
});


// PUT route for changing UPVOTE on tickets
router.put("/userTickets", function (req, res) {
    db.Ticket.update(
        { votes: { votes: sequelize.literal('votes + 1') }, updatedAt: new Date() }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
});

// PUT route for updating user (need to make a settings page?)
router.put("/userData", function (req, res) {
    db.User.update(
        {
            firstName: req.body.firstNameval,
            lastName: req.body.lastNameVal,
            userType: "Citizen",
            homePhone: req.body.phoneNumVal,
            workPhone: req.body.workPhoneVal,
            email: req.body.emailVal,
            street: req.body.streetVal,
            city: req.body.cityVal,
            state: req.body.stateVal,
            zip: req.body.zipVal,
            updatedAt: new Date()
        },
        {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
});


//   // DELETE route for deleting tickets NOT SURE IF WE WILL NEED THIS
//  router.delete("/userTickets:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });



// Export Router
module.exports = router;