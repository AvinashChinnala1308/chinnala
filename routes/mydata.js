var express = require('express');
var router = express.Router();

/* To get intersting fact */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Avinash Chalam Chinnala' });
});

module.exports = router;
