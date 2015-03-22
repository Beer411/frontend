;(function () {

	'use strict'

	angular.module('Beer411')

		.controller('ListBeersCtrl', ['$scope', 'ListsFactory',

				function ($scope, ListsFactory) {

			 		$scope.lists = [];
			 		//$routeParams.id;


         			ListsFactory.getBeers().success( function (response) {
					$scope.lists = response.beer;
					console.log(response.beer);
					});


        }

      ])



}());