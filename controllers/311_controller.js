// Setup Controller
const express = require("express");
const router = express.Router();
const db = require("../models");
// GET - Registration Form
router.get("/", (req,res) => res.render('registrationForm'));
// POST - User Data
router.post("/userData", (req,res) => console.log(req.body));
// Export Router
module.exports = router;