angular
  .module('app').component('hp', {

    templateUrl: '/js/components/hp/hp.html',

    bindings: {
      popularMovies: '<'
    },

    controller: function ($log) {
      'ngInject';

      this.$onInit = () => {
        $log.info('home component init', this.popularMovies);
      };
    }
  });