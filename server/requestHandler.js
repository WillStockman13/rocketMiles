const express = require('express');
const router = express.Router();
var request = require('request');

router.route('/getWeather')
  .post(function(req, res) {
    if(req.body.x === 0 && req.body.y === 0) {
    	request('https://api.darksky.net/forecast/95b8d3f365c65926e638fb0caa8d6d20/41.8819,87.6445', (err, response, body) => {
    		body = JSON.parse(body);
    		res.send(JSON.stringify(body.daily.data))
    	} )
    } else {
	  	request('https://api.darksky.net/forecast/95b8d3f365c65926e638fb0caa8d6d20/' + req.body.x + ',' + req.body.y, (err, response, body) => {
	  		body = JSON.parse(body);
	  		res.send(JSON.stringify(body.daily.data))
	  	} )
    }
  })

module.exports = router;