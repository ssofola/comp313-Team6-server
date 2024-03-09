const Response = require("../models/response.server.model")

const getResponses = async (req, res) => {
    try {
      const responses = await Response.find({});
      res.status(200).json(responses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getResponse = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await Response.findById(id);
      res.status(200).json(response);
      Ï;
    } catch {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createResponse = async (req, res) => {
    try {
      const response = await Response.create(req.body);
      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateResponse = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await Quiz.findByIdAndUpdate(id, req.body);
  
      if (!response) {
        return res.status(404).json({ message: "Response not found" });
      }
  
      const updatedResponse = await Quiz.findById(id);
      res.status(200).json(updatedResponse);
    } catch {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteResponse = async (req, res) => {
    try {
      const { id } = req.params;
  
      const response = await Response.findByIdAndDelete(id);
  
      if (!response) {
        return res.status(404).json({ message: "Response not found" });
      }
  
      res.status(200).json({ message: "Response deleted successfully" });
    } catch {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = { getResponse,getResponses, createResponse, updateResponse, deleteResponse}