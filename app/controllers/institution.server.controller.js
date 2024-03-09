const express = require('express');
const mongoose = require('mongoose');
const Institution = mongoose.model('Institution');

// Create a new institution
exports.create = async function(req, res, next) {
    try {
        const institution = new Institution(req.body);
        await institution.save();
        res.json(institution);
    } catch (err) {
        next(err);
    }
};

// Retrieve a list of institutions
exports.list = async function(req, res, next) {
    try {
        const institutions = await Institution.find({});
        res.json(institutions);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single institution by ID
exports.read = function(req, res) {
    res.json(req.institution);
};

// Update an existing institution
exports.update = async function(req, res, next) {
    try {
        const institution = await Institution.findByIdAndUpdate(req.institution.id, req.body, { new: true });
        res.json(institution);
    }
    catch (err) {
        next(err);
    }
}

// Delete an existing institution
exports.delete = async function(req, res, next) {
    try {
        const deletedInstitution = await Institution.deleteOne({ _id: req.institution._id });
        res.json(deletedInstitution);
    } catch (err) {
        next(err);
    }
};

// Middleware to find institution by ID
exports.institutionByID = async function(req, res, next, id) {
    try {
        const institution = await Institution.findOne({ _id: id });
        if (!institution) {
            return res.status(404).json({ error: 'Institution not found' });
        }
        req.institution = institution;
        next();
    } catch (err) {
        next(err);
    }
};
