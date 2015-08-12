'use strict';

var debug = require('debug')('app'),
    express = require('express'),
    _routes = require('./routes'),
    _firebaseApi = require('./modules/firebase-api'),
    _packageInfo = require('./../package.json');

// Express
var app = express();
app.use('/', _routes);

app._packageInfo = _packageInfo;

// Module exports
module.exports = app;

_firebaseApi.init();