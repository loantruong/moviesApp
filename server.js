const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.get('/search', function (req, res, next) {

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
          
exports = module.exports = app;