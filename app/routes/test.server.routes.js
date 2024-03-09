const tests = require('../controllers/test.server.controller');
const express = require('express');

module.exports = function(app) {
    app.route('/tests')
        .post(tests.create)
        .get(tests.list);
    app.route('/tests/:testId')
        .get(tests.read)
        .put(tests.update)
        .delete(tests.delete);
    app.param('testId', tests.testByID);
};