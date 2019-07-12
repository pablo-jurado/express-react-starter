var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post('/', function(req, res) {
  const response = {
    error: null,
    data: {
      action: "delete",
      id: req.body.id
    }
  };
  res.json(response);
});

module.exports = router;
