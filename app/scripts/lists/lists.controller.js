;(function () {

	'use strict'

	angular.module('Beer411')

	.controller('ListCtrl', ['$scope', 'ListsFactory',

		function ($scope, ListsFactory) {

			

			 $scope.lists = [];

			  ListsFactory.getBeers().success( function (response) {
        	  	$scope.lists = response.beer;
        	  	console.log(response.beer);
      		  		});

			  ListsFactory.getBars().success( function (response) {
			  		$scope.lists = response.bar;
			  		console.log(response.bar);
			  		});
		}
	])

}());