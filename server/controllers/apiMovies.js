const https = require('https');
var request = require('request');

const API_KEY = 'a4d43df3db9fe894fda8b274ba849945';

function apiMoviesController() {

  apiMoviesController.prototype.search = function (req, res, next) {
    let movie = req.query.searchMovie;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;

    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.json(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }
}

module.exports = apiMoviesController;