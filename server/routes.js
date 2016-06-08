'use strict';

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/ping', (req, res) => {
  res.json({status: 200});
});

module.exports = router;
