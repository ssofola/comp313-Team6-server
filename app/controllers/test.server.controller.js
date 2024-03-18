const Test = require("../models/test.server.model");

const getTests = async (req, res) => {
    try {
        const tests = await Test.find({});
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTest = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await Test.findById(id);
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTest = async (req, res) => {
    try {
        const test = await Test.create(req.body);
        res.status(201).json(test);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTest = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await Test.findByIdAndUpdate(id, req.body, { new: true });
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTest = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await Test.findByIdAndDelete(id);
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json({ message: "Test deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTests, getTest, createTest, updateTest, deleteTest };
