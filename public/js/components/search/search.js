angular
  .module('app').component('search', {

    templateUrl: '/js/components/search/search.html',

    controller: function (MoviesService, TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('search component init');
        this.movie = new MoviesService();
      };

      this.getMovies = (searchMovie) => {
        TMDbService.get({searchMovie}).then((data) => {
          this.movies = data.results;
        }).catch((error) => {
          this.error = error;
        });
      };

      this.displayDetails = (id) => {
        id = parseInt(id, 10)
        TMDbService.getDetails({id}).then((data) => {
          this.detailsMovies = data;
          $state.go('details');
        }).catch((error) => {
          this.error = error;
        });
      };
    }
  });