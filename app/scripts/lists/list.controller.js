;(function () {

	'use strict'

	angular.module('Beer411')

	.controller('listCtrl', ['$scope', 'ListsFactory', '$cacheFactory',

		function ($scope, ListsFactory, $cacheFactory) {

			 var cache = $cacheFactory.get('$http');

			  ListsFactory.get().success( function (response) {
        			$scope.lists = response.results;
      				});
		}
	])

}());