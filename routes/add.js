var express = require('express');
var router = express.Router();
var data = require('../data/');

router.post('/', function(req, res, next) {
  const user = req.body;
  const updatedUserList = data.addUser(user);
  res.json(updatedUserList);
});

module.exports = router;
