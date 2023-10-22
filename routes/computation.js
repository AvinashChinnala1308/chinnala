

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const randomValue = (Math.random() * 2) - 1;
    const result = Math.asin(randomValue);

    res.send(`Math.asin applied to ${randomValue} is ${result}`);
});


module.exports = router;
