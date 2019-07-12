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

  fs.writeFileSync(USERS_FILE, json_users, throwError);

  return getUsers();
}

function throwError(err) {
  if (err) throw new Error(err);
}

module.exports = {
    addUser,
    getUsers
};
