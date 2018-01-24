angular
  .module('app').component('headerApp', {

    templateUrl: '/js/components/header/header.html',

    controller: function (TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('navbar component init');
      };

      /* this.getMovies = (searchMovie) => {
        TMDbService.get({ searchMovie }).then((data) => {
          this.movies = data.results;
          $state.go('resultSearch');
        }).catch((error) => {
          this.error = error;
        });
      } */
    }
  });