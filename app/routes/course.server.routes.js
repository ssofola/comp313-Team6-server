const express = require("express");
const router = express.Router();

const {
  getCourse,
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.server.controller");

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", createCourse);

router.put("/:id", updateCourse);

router.delete("/:id", deleteCourse);

module.exports = router;
