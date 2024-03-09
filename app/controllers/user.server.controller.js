const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Create a new user
exports.create = async function(req, res, next) {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Retrieve a list of users
exports.list = async function(req, res, next) {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single user by ID
exports.read = function(req, res) {
    res.json(req.user);
};

// Update an existing user
exports.update = async function(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Delete an existing user
exports.delete = async function(req, res, next) {
    try {
        const deletedUser = await User.deleteOne({ _id: req.user._id });
        res.json(deletedUser);
    } catch (err) {
        next(err);
    }
};

// Middleware to find user by ID
exports.userByID = async function(req, res, next, id) {
    try {
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};
