const express = require("express");
const router = express.Router();

var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/departments", function(req, res) {
      db.Department.findAll({
      }).then(function(dbDepartment) {
        res.json(dbDepartment);
      });
    });
  
    app.get("/api/departments/:id", function(req, res) {
      db.Department.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Request]
      }).then(function(dbDepartment) {
        res.json(dbDepartment);
      });
    });

    app.get("/api/requests/:id", function(req, res) {
      db.Request.findAll({
        where: {
          departmentId: req.params.id
        },
        include: [db.Question]
      }).then(function(dbRequest) {
        res.json(dbRequest);
      });
    });

    app.get("/api/questions/:id", function(req, res) {
      db.Question.findAll({
        where: {
          requestId: req.params.id
        }
      }).then(function(dbQuestion) {
        res.json(dbQuestion);
      });
    });
  
    
  
  };
  