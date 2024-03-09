const locations = require('../controllers/location.server.controller');
const express = require('express');

module.exports = function(app) {
    app.route('/locations')
        .post(locations.create)
        .get(locations.list);
    app.route('/locations/:locationId')
        .get(locations.read)
        .put(locations.update)
        .delete(locations.delete);
    app.param('locationId', locations.locationByID);
};