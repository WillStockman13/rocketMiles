var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')
var fs = require('fs');

app.use(express.static('Client'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendfile('login.html', { root: './HTML'})
})

app.post('/', function(req, res) {
   res.sendfile('/pet.html', { root: '../Client'})
})

app.get('/generate', function(req, res) {
  request('http://api.petfinder.com/pet.getRandom?key=e80c32747899d292d6120960348e0976&format=json&output=basic', function(req, error, body) {
  	res.end(body)
  })
})

app.post('/database', function(req, res) {
  fs.exists('data', function(exists) {
  	if(exists) {
  		console.log(req.body)
  		fs.appendFile('data', JSON.stringify(req.body))
  	}
  })
  res.end()
})

app.get('/getDB', function(req, res) {
  fs.readFile('data', function(err, data) {
	  	data = data.toString();
	  	var dataSplit = data.split('}{')
	  	var Final = [];
	  	dataSplit.forEach(function(data) {
	  		if(data.indexOf('{') === -1 && data.indexOf('}') === -1) {
		  		Final.push('{' + data + '}')		
	  		} else if(data.indexOf('{') === 0) {
	  			Final.push(data + '}')
	  		} else if (data.indexOf('}') === data.length - 1) {
                Final.push('{' + data)
	  		}
	  	})
	  	console.log(Final)
	  	res.end(JSON.stringify(Final))
  })
})


app.listen(3000, function() {
  console.log('i am listening')
})
//description = obj.petfinder.pet.description['$t']
//name = obj.petfinder.pet.name['$t']
//picture = obj.petfinder.pet.media.photos.photo[0]['$t']
//name = 
// API Key
// e80c32747899d292d6120960348e0976
// API Secret
// af6fc770c91ba0ea7ab0cce53d8e2897
// API Status
// Active
// http://api.petfinder.com/my.method?key=12345&arg1=foo&token=67890&sig=abcdef