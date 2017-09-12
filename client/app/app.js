'use strict';

var app = angular.module('App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'ngMaterial',
  'ngMdIcons',
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
//    .when('/view1', {
//			templateUrl: 'app/main/view/register.html',
////			controller: 'FirstController'
//		})
////		.when('/view2', {
////			templateUrl: 'view2.html',
////			controller: 'SecondController'
////		})
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
