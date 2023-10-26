

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var c = req.query.c;
    var randomValue;
    if(c != undefined){
        randomValue =c;
    }
    else{
        randomValue = Math.random();
    }

const res2 = Math.asinh(randomValue);
const res3 = Math.cos(randomValue);
const res4 = Math.sin(randomValue);


const response = 
                `Math.asinh applied to ${randomValue} is ${res2}\n` + `        <br>    `+
                
                `Math.cos applied to ${randomValue} is ${res3}\n`  +`      <br>      `+
                `Math.sin  applied to ${randomValue} is ${res4}\n`;

res.send(response);

    
});


module.exports = router;
