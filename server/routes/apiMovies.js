const ApiMoviesController = require('../controllers/apiMovies');

module.exports = function (express) {

  let apiMoviesontroller = new ApiMoviesController();
  let router = express.Router();

  router.get('/search', (req, res, next) => {
    return apiMoviesController.get(req, res, next);
  });

  return router;
};