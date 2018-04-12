// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// User Info
let user_Id = "";
let user_Type = "User";
let user_DeptId;
/// ROUTES
// GET: index.handlebars
router.get("/", (req,res) => res.render('index'));
// GET: Departments
router.get("/api/departments", (req,res) => {
    db.Department.findAll({}).then((data) => res.json(data));
});
// GET: Department ID
router.get("/api/departments/:id", (req,res) => {
    db.Department.findOne({ include: [db.Request], 
    where: { id: req.params.id } }).then((data) => res.json(data));
});
// GET: Question ID
router.get("/api/questions/:id", (req,res) => {
    db.Question.findAll({ 
    where: { requestId: req.params.id } }).then((data) => res.json(data));
});
// GET: User ID
router.get("/api/user/:uid", (req,res) => {
    db.User.find({ include:[{ model: db.Admin }],
    where: { firebaseId: req.params.uid } }).then((data) => {
        user_Id = data.id;
        if(data.Admins.length > 0){
            user_Type = "Admin";
            user_DeptId = data.Admins[0].dataValues.DepartmentId;
            if(data.userType !== "Admin"){
                db.User.update( { userType: "Admin"},{ where: { id: user_Id } })
            }
        }
        res.json(data);
    });
});

//GET: User's Ticket Data
router.get("/api/tickets/", (req, res) => {
    if(user_Type === "User"){
        db.Ticket.findAll({ where: { userId: user_Id },
            include: [{ model: db.Answer, 
            include: [{ model: db.Question }]}, { model: db.Request, 
            include: [{ model: db.Department }] }, { model: db.User }]
        }).then(function(data) {      
            res.json(data);
        })
    }
    else if(user_Type === "Admin"){
        db.Request.findAll({ 
            where: { departmentId: user_DeptId }
        }).then(function(data){
            const requestIds = [];
            for(var i = 0; i < data.length; i++){
                requestIds.push(data[i].id);
            }
            db.Ticket.findAll({ where: { requestId: requestIds }, 
                include: [{ model: db.Answer, include: [{ model: db.Question }]}, 
                { model: db.Request, include: [{ model: db.Department }] }, { model: db.User }]
            }).then(function(data) {     
                res.json(data);
                console.log(data)
            })
        })
    }
});

// POST: User Data
router.post("/userData", (req,res) => {
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
router.post("/userTicket", (req,res) => {
    db.User.find({ where: { id: user_Id} }).then((userResults) => {
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
            res.json(data);
        })
    });
});
// PUT: User Tickets (Admin)
router.put("/userTickets", (req,res) => {
    db.Ticket.update(
        { status: req.body.status, updatedAt: new Date() }, 
        { where: { id: req.body.id } }).then((data) => res.json(data));
});
// PUT: User Tickets (Non-Admin)
router.put("/userTickets", (req,res) => {
    db.Ticket.update(
        { votes: { votes: sequelize.literal('votes + 1') }, updatedAt: new Date() }, 
        { where: { id: req.body.id } }).then((data) => res.json(data));
});
// PUT: User Data
router.put("/userData", (req,res) => {
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