var express = require('express');
var router = express.Router();
var data = require('../data/index');

router.get('/', function(req, res, next) {
  res.json(data.getUsers());
});

module.exports = router;
