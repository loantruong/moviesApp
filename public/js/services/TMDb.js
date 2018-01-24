angular
  .module('app')
  .service('TMDbService', function listFilm($http, $q) {
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
  })