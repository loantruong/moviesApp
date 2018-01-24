angular
  .module('app').component('hp', {

    templateUrl: '/js/components/hp/hp.html',

    bindings: {
      popularMovies: '<'
    },

    controller: function (TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('home component init', this.popularMovies);
      };

      this.displayDetails = (id) => {
        $state.go('details', {
          id: id
        });
      };
    }
  });