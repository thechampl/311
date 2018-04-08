// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
// router.get("/", (req,res) => res.render('registrationForm'));
router.get("/", (req,res) => res.render('index'));

//GET - Form Data
router.get("/new-request", function (req, res) {
    db.Department.findAll({}).then(function (data) {
        var departments = { departments: data };
        res.render('index', departments);
    });
});

router.get("/api/departments/:id", function (req, res) {
    db.Department.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Request]
    }).then(function (data) {
        res.json(data);
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

// router.get("/register", (req, res) => res.render('registrationForm'));

// GET - Landing Page
// router.get("/", (req, res) => res.render('index'));

// GET - Dashboard
// router.get("/dashboard", (req,res) => res.render('dashboard'));

// GET - SETTINGS
// router.get("/settings", (req,res) => res.render('settings'));

// POST - User Data
router.post("/userData", function (req, res) {
    // const userToAdd = req.body.
    db.User.create({
        firstName: req.body.firstNameVal,
        lastName: req.body.lastNameVal,
        userType: req.body.userType,
        homePhone: req.body.homePhoneVal,
        workPhone: req.body.workPhoneVal,
        email: req.body.emailVal,
        street: req.body.streetVal,
        city: req.body.cityVal,
        state: req.body.stateVal,
        zip: req.body.zipVal
    }).then(res.redirect("/"))

});

router.post("/userTicket", function (req, res) {
    console.log(req.body);
    db.Ticket.create({
        createdAt: new Date(), updatedAt: 0,
        comments: req.body.comments,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        UserId: req.body.UserId,
        RequestId: req.body.RequestId

    }).then(function (data) {
        var answers = req.body.answers;
        console.log(answers);
        answers.forEach(function (answer) {
            db.Answer.create({
                TicketId: data.id,
                QuestionId: answer.question,
                value: answer.answer
            })
        })

        res.json(data);
    })

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

//click new ticket
//opens modal but also makes an ajax call that gets the departments and then adds those departemnts to the department dropdown
//on dropdown change (department dropdown) make another ajax request which gives the department id and returns "REQuests"
//the requrest drop down becomes enabled with all the requests loaded into the dropdown
//on change of request dropdown, we make an ajax call to get the questions passing request id
//on return we render the questions and input boxes
//makes a post request to create a ticket, userid, requestid, comment from comment box and then (still on the server side) now we have a ticket, we also sent over the answers
//if validation errors show errors in modal
//then reload the page/rerender the page