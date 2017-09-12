'use strict';

angular.module('App')
  .controller('HomeCtrl', function ($scope, AuthService, $rootScope,$window,$location) {
    $scope.awesomeThings = [];

    console.log("$rootScope.loggedInUser.status")
    console.log($scope.loggedInUser)
    if($rootScope.loggedInUser.status === 'login'){
        window.location.href = "/login"
    }

  });
