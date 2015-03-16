;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory', 

		function ($scope, ItemsFactory, $routeParams) {

		
			$scope.items = [];

			$scope.addItem = function (itemObj) {
				ItemsFactory.add(itemObj)
				success.( function (res) {
					$scope.item = {};
					$scope.items.push(itemObj);
				});
			};




		}


	]);

}());