const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const path = require('path');
const http = require('http');
const imdb = require('imdb-api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

/* API */
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

app.get('/', function (req, res, next) {
  res.render('index');
});


app.get('/search', function (req, res, next) {
  let searchMovie = req.query.query;

  listFilm(searchMovie, res);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
          
exports = module.exports = app;