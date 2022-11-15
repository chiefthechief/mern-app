const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.js");
const studentModel = require("../models/student.js");

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);

module.exports = router;