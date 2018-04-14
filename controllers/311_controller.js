// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");

// Email Imports
const nodemailer = require("nodemailer");
const email = require("../public/assets/js/emailNotifications");

// User ID
let userId = "";
let userType = "";
let userDeptId;

/// ROUTES
// GET: index.handlebars
router.get("/", function (req, res) {
  db.Ticket.findAll({
    include: [{ model: db.Answer, include: [{ model: db.Question }] }, { model: db.Request, include: [{ model: db.Department }] }, { model: db.User }]
  }).then(function (data) {
    var hbsObject = { data };
    res.render("index", hbsObject);
  });

  // if (userType === "Admin") {
  //   db.Request.findAll({
  //     where: { departmentId: userDeptId }
  //   }).then(function (data) {
  //     const requestIds = [];
  //     for (var i = 0; i < data.length; i++) {
  //       requestIds.push(data[i].id);
  //     }
  //     db.Ticket.findAll({
  //       where: { requestId: requestIds },
  //       include: [{ model: db.Answer, include: [{ model: db.Question }] },
  //       { model: db.Request, include: [{ model: db.Department }] }, { model: db.User }]
  //     }).then(function (data) {
  //       var hbsObject = { data };
  //       res.render("index", hbsObject);
  //     });
  //   });
  // }
  // else if (userType === "User") {
  //   db.Ticket.findAll({
  //     // where: { 
  //     //     $or: [
  //     //         { requestId: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26 ] },
  //     //         { userId: userId }]
  //     // },
  //     include: [{ model: db.Answer, include: [{ model: db.Question }] }, { model: db.Request, include: [{ model: db.Department }] }, { model: db.User }]
  //   }).then(function (data) {
  //     var hbsObject = { data };
  //     res.render("index", hbsObject);
  //   });
  // }
  // else {
  //   db.Ticket.findAll({
  //     where: { requestId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26] },
  //     include: [{ model: db.Answer, include: [{ model: db.Question }] }, { model: db.Request, include: [{ model: db.Department }] }, { model: db.User }]
  //   }).then(function (data) {
  //     var hbsObject = { data };
  //     res.render("index", hbsObject);
  //   });
  // }
});

// GET: Sign Out
router.get("/signOut", (req, res) => {
  userType = "";
  res.redirect("/");
});

// GET: Departments
router.get("/api/departments", (req, res) => {
  db.Department.findAll({}).then((data) => res.json(data));
});

// GET: Department ID
router.get("/api/departments/:id", (req, res) => {
  db.Department.findOne({
    include: [db.Request],
    where: { id: req.params.id }
  }).then((data) => res.json(data));
});

// GET: Question ID
router.get("/api/questions/:id", (req, res) => {
  db.Question.findAll({
    where: { requestId: req.params.id }
  }).then((data) => res.json(data));
});

// GET: User ID
router.get("/api/user/:uid", (req, res) => {
  db.User.find({
    include: [{ model: db.Admin }],
    where: { firebaseId: req.params.uid }
  }).then((data) => {
    userId = data.id;
    userType = data.userType;
    if (data.Admins.length > 0) {
      userDeptId = data.Admins[0].dataValues.DepartmentId;
      if (data.userType !== "Admin") {
        db.User.update({ userType: "Admin" }, { where: { id: userId } })
      }
    }
    res.json(data);
  });
});

// POST: User Data
router.post("/userData", (req, res) => {
  db.User.create({
    firstName: req.body.firstNameVal,
    lastName: req.body.lastNameVal,
    userType: req.body.userType,
    homePhone: req.body.homePhoneVal,
    email: req.body.emailVal,
    street: req.body.addressVal,
    city: req.body.cityVal,
    state: req.body.stateVal,
    zip: req.body.zipVal,
    firebaseId: req.body.firebaseId
  }).then(res.redirect("/"));
});

// POST: User Ticket
router.post("/userTicket", (req, res) => {
  db.User.find({ where: { id: userId } }).then((userResults) => {
    db.Ticket.create({
      createdAt: new Date(),
      updatedAt: 0,
      comments: req.body.comments,
      street: userResults.street,
      city: userResults.city,
      state: userResults.state,
      zip: userResults.zip,
      status: "New",
      UserId: userResults.id,
      RequestId: req.body.requestId
    }).then((data) => {
      var answers = req.body.answers;
      answers.forEach((answer) => {
        db.Answer.create({
          TicketId: data.id,
          QuestionId: answer.question,
          value: answer.answer
        });
      });
      res.redirect("/");
    })
  });
});

// PUT: User Tickets (Admin)
router.put("/userTicketsUpdate", (req, res) => {
  // successfully sending status, id, and text to this route from front end
  const ticket = req.body.ticketText;
  db.Ticket.update(
    { status: req.body.status, updatedAt: new Date() },
    { where: { id: req.body.id } }).then((data) => res.json(data));

  db.Ticket.find({
    where: { id: req.body.id }
  }).then((data) => {
    db.User.find({
      where: { id: data.UserId }
    }).then(userData => {
      const usersEmail = userData.email;
      const userName = userData.firstName;
      email(usersEmail, userName, ticket);
    })
  })
});

// PUT: User Tickets (Non-Admin)
router.put("/userTickets", (req, res) => {
  db.Ticket.update(
    { votes: { votes: sequelize.literal('votes + 1') }, updatedAt: new Date() },
    { where: { id: req.body.id } }).then((data) => res.json(data));
});

// PUT: User Data
router.put("/userData", (req, res) => {
  db.User.update(
    {
      firstName: req.body.firstNameval,
      lastName: req.body.lastNameVal,
      userType: "User",
      homePhone: req.body.phoneNumVal,
      workPhone: req.body.workPhoneVal,
      email: req.body.emailVal,
      street: req.body.streetVal,
      city: req.body.cityVal,
      state: req.body.stateVal,
      zip: req.body.zipVal,
      updatedAt: new Date()
    },
    { where: { id: req.body.id } }).then((data) => res.json(data));
});

// Export Router
module.exports = router;