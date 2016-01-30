#!/usr/bin/env node
'use strict';

var debug = require('debug')('app');
var express = require('express');
var _routes = require('./routes');
var _package = require('./../package.json');

// setup express
var app = express();
app.use('/', _routes);

// app exports
app.packageInfo = _package;
module.exports = app;