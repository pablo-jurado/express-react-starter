var express = require('express');
var router = express.Router();
var data = require('../data/index');

router.post('/', function(req, res) {
  const id = req.body.id;
  if (id) {
    const updatedUserList = data.deleteUser(id);

    res.json( {users: updatedUserList} );
  }
});

module.exports = router;
