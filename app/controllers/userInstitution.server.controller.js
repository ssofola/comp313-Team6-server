const express = require('express');
const mongoose = require('mongoose');
const UserInstitution = mongoose.model('UserInstitution');

// Create a new userInstitution
exports.create = async function(req, res, next) {
    try {
        const userInstitution = new UserInstitution(req.body);
        await userInstitution.save();
        res.json(userInstitution);
    } catch (err) {
        next(err);
    }
};

// Retrieve a list of userInstitutions
exports.list = async function(req, res, next) {
    try {
        const userInstitutions = await UserInstitution.find({});
        res.json(userInstitutions);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single userInstitution by ID
exports.read = function(req, res) {
    res.json(req.userInstitution);
};

// Update an existing userInstitution
exports.update = async function(req, res, next) {
    try {
        const userInstitution = await UserInstitution.findByIdAndUpdate(req.userInstitution.id, req.body, { new: true });
        res.json(userInstitution);
    } catch (err) {
        next(err);
    }
};

// Delete an existing userInstitution
exports.delete = async function(req, res, next) {
    try {
        const deletedUserInstitution = await UserInstitution.deleteOne({ _id: req.userInstitution._id });
        res.json(deletedUserInstitution);
    } catch (err) {
        next(err);
    }
};

// Middleware to find userInstitution by ID
exports.userInstitutionByID = async function(req, res, next, id) {
    try {
        const userInstitution = await UserInstitution.findOne({ _id: id });
        if (!userInstitution) {
            return res.status(404).json({ error: 'UserInstitution not found' });
        }
        req.userInstitution = userInstitution;
        next();
    } catch (err) {
        next(err);
    }
};