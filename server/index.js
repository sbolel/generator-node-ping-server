'use strict';

const express = require('express');
const routes = require('./routes');
const packageInfo = require('../package.json');

const app = express();

app.package = packageInfo;

app.use(routes);

module.exports = app;
