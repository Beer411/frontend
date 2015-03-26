; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ascBarCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

		function ($scope, ListsFactory, $routeParams, $location) {

			$scope.lists = [];
			var beerId = $routeParams.id;

			ListsFactory.getBeer(beerId)
				.success (function (res) {
					console.log(res);
					$scope.beer = res.beer;
					$scope.bars = res.bars;
					});



			var barId = $routeParams.id;
			 		
			ListsFactory.getBar(barId)
				.success (function (res) {
				 console.log(res);
				$scope.bar = res.bar;
				$scope.beers = res.beers;

				});

			$scope.addBar = function (bar) {
				// asc factory add one bar
			}

			
			










			}
		])

}());