;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory', '$routeParams',

			function ($scope, ItemsFactory, $routeParams) {


				$scope.getBeers = '';
				$scope.getBars = '';
				$scope.items = [];
			

				ItemsFactory.getBeers().success( function (response) {
        			$scope.items = response.beer;
        			//console.log(response.beer);
      				});

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

			  	ItemsFactory.getBars().success( function (response) {
			  		$scope.items = response.bar;
			  		//console.log(response.bar);
			  		});

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