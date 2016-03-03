var express = require('express');
// var Flickr = require('./Route/AppModule');
var http = require('http');
var app = express();
var server = http.Server(app);

server.listen((process.env.PORT || 80), function(){
  console.log('listening on *:80');
});
// Set Folder AS Root Folder
app.use(express.static('Images'));
app.use(express.static('Script'));
app.use(express.static('View'));

// Set HomePage
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

//Define ApiModule Acessible And Carries Parameter
// app.get('/Flickr/:parameterflickrtags', Flickr.FlickrApi);
// app.get('/Foursquare/:foursquareparameter',Flickr.FourSquareApi);
// app.get('/FoursquareID/:foursquareidparameter',Flickr.FourSquareApiByID);


