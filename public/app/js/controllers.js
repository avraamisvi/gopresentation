'use strict';

/* Controllers */

var phonecatControllers = angular.module('gopresentationControllers', []);

phonecatControllers.controller('RoomCtrl', ['$scope', '$http',
  function($scope,$http) {
    //$scope.phones = Phone.query();
    //$scope.orderProp = 'age';

	$http.get('/public/app/data/atendees.json').success(function(data) {
	    $scope.attendees = data;
	  }).
    	error(function(data, status, headers, config) {
      		console.log(data);
    	});

  }]);