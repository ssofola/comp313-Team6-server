const userInstitutions = require('../controllers/userInstitution.server.controller');
const express = require('express');

module.exports = function(app) {
    app.route('/userInstitutions')
        .post(userInstitutions.create)
        .get(userInstitutions.list);
    app.route('/userInstitutions/:userInstitutionId')
        .get(userInstitutions.read)
        .put(userInstitutions.update)
        .delete(userInstitutions.delete);
    app.param('userInstitutionId', userInstitutions.userInstitutionByID);
};