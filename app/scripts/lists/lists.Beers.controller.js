;(function () {

	'use strict'

	angular.module('Beer411')

		.controller('ListBeersCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

				function ($scope, ListsFactory, $routeParams, $locaton) {

			 		$scope.lists = [];
			 		$routeParams.id;
			 		

         			ListsFactory.getBeers().success( function (response) {
					$scope.lists = response.beer;
					//console.log(response.beer);
					});

         			//show single beer from list
					//$scope.getBeer = function (l) {
					//  console.log(l);
					//   ListsFactory.getBeer(l)
					//	.success (function (res) {
					//		console.log(res);
					//	});

					//};
					


        }

      ])



}());