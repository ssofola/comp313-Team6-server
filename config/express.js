//express file

// Load the module dependencies
var config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a new express application instance
module.exports = function() {
    // Create a new Express application instance
    const app = express();
    // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    // Use the 'cookie-parser' middleware
    app.use(cookieParser());
    // Use the 'express-session' middleware
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    // Configure the 'CORS' middleware
    app.use(cors());
    // Load the routing files
    require('../app/routes/user.server.routes')(app);
    // Return the Express application instance
    return app;
};