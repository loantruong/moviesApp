angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/',
        component: 'hp',
        resolve: {
          popularMovies: (TMDbService) => TMDbService.getPopular()
        }
      })
      .state({
        name: 'add',
        url: '/add',
        component: 'add'
      })
      .state('details', {
        url: '/details/:id',
        component: 'detailsMovie',
        resolve: { 
          detailsMovie: (TMDbService, $transition$) => {
            return TMDbService.getDetails({
              id: $transition$.params().id
            });
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  });
