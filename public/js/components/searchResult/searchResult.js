angular
  .module('app').component('resultSearch', {

    templateUrl: '/js/components/searchResult/searchResult.html',

    bindings: {
      movies: '<'
    },

    controller: function ($log) {
      'ngInject';

      this.$onInit = () => {
        $log.info('searchResult component init');
      };
    }
  });