angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'hp',
        resolve: {
          movies: (TMDbService) => TMDbService.get().$promise
        }
      })

    $urlRouterProvider.otherwise('/home');
  });
