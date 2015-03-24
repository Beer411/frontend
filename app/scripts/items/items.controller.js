;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory',

			function ($scope, ItemsFactory, $routeParams) {


				//$scope.getBeers = '';
				//$scope.getBars = '';
				$scope.items = [];

			 	//adding Beers
			  	$scope.addBeers = function(itemObj) {
			  		console.log(itemObj);
			  		ItemsFactory.addBeers(itemObj)
			  		.success( function (res) {
			  			$scope.item = {};
			  			$scope.items.push(itemObj);
			  			}
			  		);
			  	};

			  	//adding Bars
				$scope.addBars = function(itemObj) {
					ItemsFactory.addBars(itemObj)
					.success( function (res) {
						$scope.item = {};
						$scope.items.push(itemObj);

						}
					);
				};
				

		  



		  }

		])
	
}());