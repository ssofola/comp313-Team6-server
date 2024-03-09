const institutions = require('../controllers/institution.server.controller');
const express = require('express');

module.exports = function(app) {
    app.route('/institutions')
        .post(institutions.create)
        .get(institutions.list);
    app.route('/institutions/:institutionId')
        .get(institutions.read)
        .put(institutions.update)
        .delete(institutions.delete);
    app.param('institutionId', institutions.institutionByID);
};