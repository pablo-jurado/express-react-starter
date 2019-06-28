var express = require('express');
var router = express.Router();
var fs = require('fs');

const USERS_FILE = 'data/users.json';

function addUser(newUser) {
  var users = JSON.parse(fs.readFileSync(USERS_FILE));
  var newID = users[users.length - 1].id + 1;
  newUser.id = newID;
  users.push(newUser);

  var json_users = JSON.stringify(users, null, 2);

  fs.writeFile(USERS_FILE, json_users, function(err) {
    if (err) return false
    return true
  });
}

/* GET users listing. */
router.post('/', function(req, res, next) {
  const userData = req.body;
  
  if (addUser(userData)) {
    res.send({
      status: "success",
      receive: userData
    });
  } else {
    res.send({
      status: "fail",
    });
  }

});

module.exports = router;
