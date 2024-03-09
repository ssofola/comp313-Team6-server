const express = require('express');
const mongoose = require('mongoose');
const Test = mongoose.model('Test');

// Create a new test
exports.create = async function(req, res, next) {
    try {
        const test = new Test(req.body);
        await test.save();
        res.json(test);
    } catch (err) {
        next(err);
    }
};

// Retrieve a list of tests
exports.list = async function(req, res, next) {
    try {
        const tests = await Test.find({});
        res.json(tests);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single test by ID
exports.read = function(req, res) {
    res.json(req.test);
};

// Update an existing test
exports.update = async function(req, res, next) {
    try {
        const test = await Test.findByIdAndUpdate(req.test.id, req.body, { new: true });
        res.json(test);
    }
    catch (err) {
        next(err);
    }
}

// Delete an existing test
exports.delete = async function(req, res, next) {
    try {
        const deletedTest = await Test.deleteOne({ _id: req.test._id });
        res.json(deletedTest);
    } catch (err) {
        next(err);
    }
};

// Middleware to find test by ID
exports.testByID = async function(req, res, next, id) {
    try {
        const test = await Test.findOne({ _id: id });
        if (!test) {
            return res.status(404).json({ error: 'Test not found' });
        }
        req.test = test;
        next();
    }
    catch (err) {
        next(err);
    }
}

