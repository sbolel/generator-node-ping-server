'use strict';

var debug = require('debug')('api');
var cors = require('cors');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/ping', function(req, res){
  debug('GET /ping');
  res.json({status: 200});
});

module.exports = router;