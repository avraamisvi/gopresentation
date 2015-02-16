'use strict';

/* App Module */

var gopresentationApp = angular.module('gopresentationApp', [
 	'ngRoute',
 	'gopresentationControllers'
]);

gopresentationApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/room', {
        templateUrl: '/public/app/partials/room.html',
        controller: 'RoomCtrl'
      }).
      otherwise({
        redirectTo: '/room'
      });
  }]);