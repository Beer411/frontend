; (function () {

 	'use strict'

 	angular.module('Beer411')

 	
		.controller('ListSingleBarCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

				function ($scope, ListsFactory, $routeParams, $location) {

			 		var barId = $routeParams.id;

						ListsFactory.getBar(barId)
							.success (function (res) {
								console.log(res);
								$scope.bar = res.bar;
								$scope.beers = res.beers;

								});
					


        }

      ])



}());