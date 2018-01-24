angular
  .module('app').component('hp', {

    templateUrl: '/js/components/hp/hp.html',

    controller: function (TMDbService, $log) {
      'ngInject';

      this.$onInit = () => {
        $log.info('home component init');
      };
    }
  });