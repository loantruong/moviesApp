angular
  .module('app').component('navApp', {

    templateUrl: '/js/components/nav/nav.html',

    controller: function (TMDbService, $log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('navbar component init');
      };
    }
  });