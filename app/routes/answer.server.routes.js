const express = require("express");
const router = express.Router();

const {
  getAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../controllers/answer.server.controller");

router.get("/", getAnswers);

router.get("/:id", getAnswer);

router.post("/", createAnswer);

router.put("/:id", updateAnswer);

router.delete("/:id", deleteAnswer);

module.exports = router;
