'use strict';

var debug = require('debug')('api');
var express = require('express');
var router = express.Router();

router.get('/ping', function(req, res){
  debug('/ping request received.');
  res.json({status: 200});
});

module.exports = router;