const Question = require("../models/question.server.model");

const getQuestions = async (req, res) => {
    try {
      const questions = await Question.find({});
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await Question.findById(id);
      res.status(200).json(question);
    } catch {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createQuestion = async (req, res) => {
    try {
      const question = await Question.create(req.body);
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateQuestion = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await Question.findByIdAndUpdate(id, req.body);
  
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      const updatedQuestion = await Question.findById(id);
      res.status(200).json(updatedQuestion);
    } catch {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteQuestion = async (req, res) => {
    try {
      const { id } = req.params;
  
      const question = await Question.findByIdAndDelete(id);
  
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
  
      res.status(200).json({ message: "Question deleted successfully" });
    } catch {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    getQuestion, getQuestions, createQuestion, updateQuestion, deleteQuestion
  }