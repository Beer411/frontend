; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ascBeerCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

		function ($scope, ListsFactory, $routeParams, $location) {

			var barId = $routeParams.id;
			 		

			ListsFactory.getBeer(barId)
				.success (function (res) {
				console.log(res);
				$scope.beer = res.beer;
				$scope.bars = res.bars;
				});
		}

	])

}());

