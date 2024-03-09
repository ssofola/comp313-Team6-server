const Quiz = require("../models/quiz.server.model");

const getQuizes = async (req, res) => {
  try {
    const quizes = await Quiz.find({});
    res.status(200).json(quizes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    res.status(200).json(quiz);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndUpdate(id, req.body);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const updatedQuiz = await Quiz.findById(id);
    res.status(200).json(updatedQuiz);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const quiz = await Quiz.findByIdAndDelete(id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getQuiz, getQuizes, createQuiz, updateQuiz, deleteQuiz };
