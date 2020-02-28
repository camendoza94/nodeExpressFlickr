// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const Flickr = require('flickr-sdk');


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Searches Flickr for a specific query
app.get('/flickr/:query', function (req, res) {
    console.log("Flickr call query=" + req.params['query']);
    const flickr = new Flickr(process.env.FLICKR_API_KEY);
    // we can now use "flickr" as our API object,
    // but we can only call public methods and access public data
    flickr.photos.search({
        safe_search: 1,
        sort: "relevance",
        text: req.params["query"],
        tags: req.query["tags"],
        color_codes: req.query["color_codes"]
    })
        .then(data => res.send(data))
        .catch(err => {
            res.send(err);
            console.log("Got flickr data sending it");
        })
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;