var express = require('express');
var bodyParser = require('body-parser')
var http = require('http');
var path = require('path');
var request = require('request');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get('/api/atnd', function(req,res){
	console.log('/api/atnd get');
	request(
	{
		method: 'GET',
		uri: 'http://api.atnd.org/events/?keyword=google'
	}, function(error, response, body){
		console.log('statusCode:' + response.statusCode);
		console.log('body:' + body);
		res.send(body);
	});
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});