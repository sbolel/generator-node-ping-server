#!/usr/bin/env node
'use strict';

var debug = require('debug')('app'),
    express = require('express'),
    _routes = require('./routes'),
    _packageInfo = require('./../package.json');

// setup express
var app = express();
app.use('/', _routes);

// app exports
app.packageInfo = _packageInfo;
module.exports = app;