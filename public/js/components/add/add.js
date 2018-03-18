angular
  .module('app').component('add', {

    templateUrl: '/js/components/add/add.html',

    controller: function (MoviesService, TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        this.movie = new MoviesService();
      };
      this.submit = () => {
        this.movie.$save().then((movie) => {
          $state.go('home');
        }).catch((err) => {
          this.errorMessage = err;
        });
      };
      this.search = (search) => {
        TMDbService.search(search).then((result) => {
          $log.info(result);
          this.movie.title = result.Title;
          this.movie.description = result.Plot;
          this.movie.image = result.Poster;
          this.movie.date = result.Year;
        }).catch((err) => {
          this.errorMessage = err;
        });
      };
    }

  });