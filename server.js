var config = require('./config.json');
var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var filter = require('./filter.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/output', function(req, res){
  var outputText = filter.redacted(req.body.inputText);
  res.render('output', {outputText : outputText});
});

var server = app.listen(config.port, displayServerInfo);

function displayServerInfo() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
}