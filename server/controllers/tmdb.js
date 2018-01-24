const https = require('https');
var request = require('request');

const API_KEY = 'a4d43df3db9fe894fda8b274ba849945';

function listFilm(movie, expressResponse) {
  tmdbController.prototype.get = function (req, res, next) {
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
}

function listPopularFilm(movie, expressResponse) {
  tmdbController.prototype.list = function (req, res, next) {
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
}


module.exports = tmdbController;