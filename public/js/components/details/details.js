angular
  .module('app').component('detailsMovie', {

    templateUrl: '/js/components/details/details.html',

    bindings: {
      detailsMovie: '<'
    },

    controller: function ($log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('searchResult component init', this.detailsMovie);
      };
    }
  });