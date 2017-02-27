var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')
var requestHandler = require('./requestHandler.js')

app.use(express.static('Client'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', requestHandler)

app.get('/', function(req, res) {
   res.sendfile('/weather.html', { root: '../Client'})
})

app.listen(3000, function() {
  console.log('i am listening on 3000')
})
