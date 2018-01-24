const TMDb = require('../controllers/tmdb');

module.exports = function (express) {

  let TmdbController = new tmdbController();
  let router = express.Router();

  router.get('/search:searchMovie', (req, res, next) => {
    let searchMovie = req.query.searchMovie;
    return tmdbController.get(req, res, next);
  });

  return router;
};