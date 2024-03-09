const express = require("express");
const router = express.Router();

const {
  getQuiz,
  getQuizes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quiz.server.controller");

router.get("/", getQuizes);

router.get("/:id", getQuiz);

router.post("/", createQuiz);

router.put("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

module.exports = QuizRouter;
