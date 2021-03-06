var fs = require('fs');
var utils = require('../utils');
const USERS_FILE = 'data/users.json';

function getUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function addUser(newUser) {
  newUser.id = utils.uuid();
  var users = getUsers();
  users.push(newUser);

  return saveUsers(users);
}

function saveUsers(users) {
  var jsonUsers = JSON.stringify(users, null, 2);
  fs.writeFileSync(USERS_FILE, jsonUsers, throwError);
  return getUsers();
}

function deleteUser(id) {
  const updatedUsersList = getUsers().filter(user => user.id !== id);
  return saveUsers(updatedUsersList);
}

function updateUser(user) {
  const usersList = getUsers();
  const userIndex = usersList.findIndex(u => u.id === user.id);

  usersList[userIndex] = user;

  return saveUsers(usersList);
}

function throwError(err) {
  if (err) throw new Error(err);
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
    updateUser
};
