var express = require('express')，
	http = require('http')，
	app = express()，
	server = http.Server(app);

// Set Folder AS Root Folder
app.use(express.static('Images'));
app.use(express.static('Script'));
app.use(express.static('index'));

server.listen((process.env.PORT || 80), function(){
  console.log('listening on *:80');
});

// Set HomePage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


//Define ApiModule Acessible And Carries Parameter
// app.get('/Flickr/:parameterflickrtags', Flickr.FlickrApi);
// app.get('/Foursquare/:foursquareparameter',Flickr.FourSquareApi);
// app.get('/FoursquareID/:foursquareidparameter',Flickr.FourSquareApiByID);


