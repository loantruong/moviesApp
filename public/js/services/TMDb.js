angular
  .module('app')
  .service('TMDbService', function listFilm($http, $q, $window) {
    'ngInject';

    this.get = (searchMovie) => {
      let defer = $q.defer();
      $http.get('/search', { params: searchMovie }).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
      return defer.promise;
    }

    this.getPopular = () => {
      let defer = $q.defer();
      $http.get('/home').then((response) => {
        defer.resolve(response.data.results);
      }).catch((error) => {
        defer.reject(error);
      })
      return defer.promise;
    }

    this.getDetails = (id) => {
      let defer = $q.defer();
      $http.get(`/details/${id}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
      return defer.promise;
    }

    this.search = (query) => {
      const params = $window.encodeURIComponent(query);
      const url = `http://www.omdbapi.com/?apikey=81d3b711&t=${params}`;
      const defer = $q.defer();
      $http.get(url).then((results) => {
        defer.resolve(results.data);
      }).catch((err) => {
        defer.reject(err);
      });
      return defer.promise;
    };

  })
  .factory('MoviesService', ($resource) => {
    return $resource('/movies/:id', {
      id: '@id'
    });
  })
