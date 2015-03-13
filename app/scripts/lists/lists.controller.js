;(function () {

	'use strict'

	angular.module('Beer411')

	.controller('ListCtrl', ['$scope', 'ListsFactory', '$cacheFactory',

		function ($scope, ListsFactory, $cacheFactory) {

			 var cache = $cacheFactory.get('$http');

			  ListsFactory.get().success( function (response) {
        			$scope.lists = response.results;

        			console.log(response.results);
      				});
		}
	])

}());