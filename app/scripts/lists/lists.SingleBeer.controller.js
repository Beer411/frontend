; (function () {

		'use strict'

		angular.module('Beer411')

		.controller('ListSingleBeerCtrl', [ '$scope', 'ListsFactory', '$routeParams', '$location',

			function ($scope, ListsFactory, $routeParams, $location) {

			 	var beerId = $routeParams.id;

				ListsFactory.getBeer(beerId)
				.success (function (res) {
					$scope.beer = res.beer;
					$scope.bars = res.bars;

				});
					


        }

      ])



}());