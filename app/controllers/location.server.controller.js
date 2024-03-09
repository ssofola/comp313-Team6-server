const express = require('express');
const mongoose = require('mongoose');
const Location = mongoose.model('Location');

// Create a new location
exports.create = async function(req, res, next) {
    try {
        const location = new Location(req.body);
        await location.save();
        res.json(location);
    } catch (err) {
        next(err);
    }
};

// Retrieve a list of locations
exports.list = async function(req, res, next) {
    try {
        const locations = await Location.find({});
        res.json(locations);
    } catch (err) {
        next(err);
    }
};

// Retrieve a single location by ID
exports.read = function(req, res) {
    res.json(req.location);
};

// Update an existing location
exports.update = async function(req, res, next) {
    try {
        const location = await Location.findByIdAndUpdate(req.location.id, req.body, { new: true });
        res.json(location);
    }
    catch (err) {
        next(err);
    }
}

// Delete an existing location
exports.delete = async function(req, res, next) {
    try {
        const deletedLocation = await Location.deleteOne({ _id: req.location._id });
        res.json(deletedLocation);
    } catch (err) {
        next(err);
    }
};

// Middleware to find location by ID
exports.locationByID = async function(req, res, next, id) {
    try {
        const location = await Location.findOne({ _id: id });
        if (!location) {
            return res.status(404).json({ error: 'Location not found' });
        }
        req.location = location;
        next();
    } catch (err) {
        next(err);
    }
};
