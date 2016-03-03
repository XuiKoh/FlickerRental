var Twitter = require('node-tweet-stream'),
	express = require('express'),
	http = require('http'),
	app = express(),
	server = http.Server(app),
	io = require('socket.io')(server, {pingTimeout: 180000}),
	emotional = require('emotional'),
	nStore = require('nstore'),
	fs = require('fs'),
	Flickr = require('./Route/AppModule'),
	os = require('os');

app.use(express.static('js'));
app.use(express.static('Image'));
app.use(express.static('index'));
app.use(express.static('style'));
server.listen((process.env.PORT || 80), function(){
  console.log('listening on *:80');
});

// Set HomePage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Define ApiModule Acessible And Carries Parameter
app.get('/Flickr/:parameterflickrtags', Flickr.FlickrApi);
app.get('/Foursquare/:foursquareparameter',Flickr.FourSquareApi);
app.get('/FoursquareID/:foursquareidparameter',Flickr.FourSquareApiByID);


