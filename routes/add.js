var express = require('express');
var router = express.Router();
var fs = require('fs');

const USERS_FILE = 'data/users.json';

function getUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function addUser(newUser) {
  var users = getUsers();
  var newID = users[users.length - 1].id + 1;
  newUser.id = newID;
  users.push(newUser);

  var json_users = JSON.stringify(users, null, 2);

  fs.writeFileSync(USERS_FILE, json_users, function(err) {
    if (err) console.log(err);
  });
}

/* GET users listing. */
router.post('/', function(req, res, next) {
  const userData = req.body;

  addUser(userData);
  res.json(getUsers());
});

module.exports = router;
