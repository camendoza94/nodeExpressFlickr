// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flickr = require("flickrapi");
const app = express();
const api_key = process.env.FLICKR_KEY;
const api_secret = process.env.FLICKR_SECRET;
// Assumes that there are environmental variables files containing the keys
// FLICKR_KEY
// FLICKR_SECRET
function getApiKeys(callback) {
	if(api_key && api_secret){
		callback(api_key, api_secret);
	}
	else {
		console.log("There was an error getting the keys");
		return;
	}
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Searches Flickr for a specific query
app.get('/flickr/:query', function (req, res) {
	console.log("Flickr call query=" + req.params['query'] );
	getApiKeys((api_key, api_secret) => {
		const Flickr = require("flickrapi"),
		flickrOptions = {
			api_key: api_key,
			secret: api_secret
		};
		console.log(api_key);
		console.log(api_secret);
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			console.log("tokenOnly");
			if (error) {
				res.send(error);
				return;
			}
		  // we can now use "flickr" as our API object,
		  // but we can only call public methods and access public data
		  flickr.photos.search({
		  	safe:1,
		  	sort:"relevance",
		  	text:req.params["query"],
		  	tags:req.query["tags"],
		  	color_codes:req.query["color_codes"]
		  }, (err, data) => {
		  	if (err) res.send(err);
		  	console.log("Got flickr data sending it");
		  	res.send(data);
		  });
		});

	})
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;