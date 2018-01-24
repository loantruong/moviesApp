const express = require('express');
const bodyParser = require('body-parser');
const models = require('./server/models');
var request = require('request');
const path = require('path');
const http = require('http');

const apiMoviesRouter = require('./server/routes/apiMovies');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

/* API TMDb */
const API_KEY = 'a4d43df3db9fe894fda8b274ba849945';

function listFilm(movie, expressResponse) {
  request({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`,
    method: 'GET',
    limit: 10
  }, function (err, res, body) {
    if (err) {
      return expressResponse.json(err);
    } else {
      return expressResponse.json(JSON.parse(body));
    }
  });
}

function detailsMovie(id, expressResponse) {
  request({
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    method: 'GET',
    limit: 10
  }, function (err, res, body) {
    if (err) {
      return expressResponse.json(err);
    } else {
      return expressResponse.json(JSON.parse(body));
    }
  });
}

function popularMovies(expressResponse) {
  request({
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    method: 'GET',
    limit: 10
  }, function (err, res, body) {
    if (err) {
      return expressResponse.json(err);
    } else {
      return expressResponse.json(JSON.parse(body));
    }
  });
}

app.get('/home', function (req, res, next) {
  popularMovies(res);
});

/* app.get('/search', function (req, res, next) {
  let searchMovie = req.query.searchMovie;
  listFilm(searchMovie, res);
}) */

app.get('/details', function (req, res, next) {
  let id = req.query.id;
  detailsMovie(id, res);
})

app.use('/', apiMoviesRouter(express));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
          
exports = module.exports = app;