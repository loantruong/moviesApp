angular
  .module('app').component('search', {

    templateUrl: '/js/components/search/search.html',

    controller: function (TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('search component init');
      };

      this.getMovies = (searchMovie) => {
        TMDbService.get({searchMovie}).then((data) => {
          this.movies = data.results;
        }).catch((error) => {
          this.error = error;
        });
      }
    }
  });