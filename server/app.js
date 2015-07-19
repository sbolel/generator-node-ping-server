'use strict';

var debug = require('debug')('app'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    express = require('express'),
    path = require('path'),
    request = require('request'),
    cors = require('cors'),
    // fs = require('fs-extra'),
    _ = require('underscore'),
    Q = require('q'),
    events = require('events'),
    emitter = new events.EventEmitter(),
    _api = require('./routes/api'),
    _packageInfo = require('./../package.json');

// Express
var app = express();
app.use('/', _api);

app._packageInfo = _packageInfo;

// Module exports
module.exports = app;
