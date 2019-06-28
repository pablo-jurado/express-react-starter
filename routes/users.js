var express = require('express');
var router = express.Router();
var fs = require('fs');

var users = JSON.parse(fs.readFileSync('data/users.json'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body)
  res.json(users);
});

module.exports = router;
