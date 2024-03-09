const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
    const db = mongoose.connect(config.db, {
        dbName: 'MindQuiz' // Specify your database name here
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    // Load models
    require('../app/models/user.server.model');
    require('../app/models/userInstitution.server.model');
    require('../app/models/location.server.model');
    require('../app/models/institution.server.model');
    require('../app/models/test.server.model');


    return db;
};
