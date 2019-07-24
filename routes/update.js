var express = require('express');
var router = express.Router();
var data = require('../data');

router.post('/', function(req, res) {
  const user = req.body;
  const updatedUserList = data.updateUser(user);
  res.json(updatedUserList);
});

module.exports = router;
