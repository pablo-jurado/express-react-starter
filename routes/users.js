var express = require('express');
var router = express.Router();


var data = [{
  "id": 1,
  "first_name": "Umeko",
  "last_name": "MacNeil",
  "email": "umacneil0@i2i.jp"
}, {
  "id": 2,
  "first_name": "Twila",
  "last_name": "Tonbridge",
  "email": "ttonbridge1@pinterest.com"
}, {
  "id": 3,
  "first_name": "Lynda",
  "last_name": "Saich",
  "email": "lsaich2@tuttocitta.it"
}, {
  "id": 4,
  "first_name": "Dasya",
  "last_name": "Schellig",
  "email": "dschellig3@biblegateway.com"
}, {
  "id": 5,
  "first_name": "Marianna",
  "last_name": "Buckoke",
  "email": "mbuckoke4@amazon.com"
}, {
  "id": 6,
  "first_name": "Jasper",
  "last_name": "Lawtie",
  "email": "jlawtie5@opensource.org"
}, {
  "id": 7,
  "first_name": "Karol",
  "last_name": "Avann",
  "email": "kavann6@bbc.co.uk"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
