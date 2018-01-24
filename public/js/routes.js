angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'hp',
        resolve: {
          popularMovies: (TMDbService) => TMDbService.getPopular().$promise
        }
      })
      .state('details', {
        url: '/details/:id',
        component: 'details',
        resolve: {    
          detailsMovie: (TMDbService, $transition$) => {
            return TMDbService.getDetails({
              id: $transition$.params().id
            }).$promise;
          }
        }
      })

    $urlRouterProvider.otherwise('/home');
  });
