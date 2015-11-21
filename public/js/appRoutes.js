'use strict';

 // app/routes.js

// Setting up route
angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Redirect to 404 when route not found
     $urlRouterProvider.otherwise("/"); // default call to url
    //   $injector.get('$state').transitionTo('not-found', null, {
    //     location: false
    //   });
    // });

    // Home state routing
    $stateProvider
     
    .state('home', {
        abstract: true,
        url: '',
        template: '<div class="app" id="app" ui-view></div>',
        controller: 'MainController'
        // data: {
        //   roles: ['user', 'admin']
        // }
    })
    .state('home.page', {
        url: '/',
        //templateUrl: 'views/service.html',
       // controller: 'ServiceController'
    })
    .state('home.service', {
        url: '/sercives',
        templateUrl: 'views/service.html',
        controller: 'ServiceController'
    })

    // .state('home', {
    //   url: '/',
    //   templateUrl: 'views/home.html',
    //   controller: 'MainController'
    // })
    // .state('not-found', {
    //   url: '/not-found',
    //   templateUrl: 'modules/core/client/views/404.client.view.html',
    //   data: {
    //     ignoreState: true
    //   }
    // })
    // .state('not-found', {
    //   url: '/not-found',
    //   templateUrl: 'modules/core/client/views/404.client.view.html',
    //   data: {
    //     ignoreState: true
    //   }
    // })
    // .state('bad-request', {
    //   url: '/bad-request',
    //   templateUrl: 'modules/core/client/views/400.client.view.html',
    //   data: {
    //     ignoreState: true
    //   }
    // })
    // .state('forbidden', {
    //   url: '/forbidden',
    //   templateUrl: 'modules/core/client/views/403.client.view.html',
    //   data: {
    //     ignoreState: true
    //   }
    // });

    $locationProvider.html5Mode(true);
  }
]);


