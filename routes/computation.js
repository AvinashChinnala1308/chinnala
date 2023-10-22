

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const randomValue = Math.floor(Math.random() * (20)) + 1;

const res2 = Math.asinh(randomValue);
const res3 = Math.cos(randomValue);

const response = 
                `Math.asinh applied to ${randomValue} is ${res2}\n` + `        and    `+
                `Math.cos applied to ${randomValue} is ${res3}\n` ;

res.send(response);

    
});


module.exports = router;
