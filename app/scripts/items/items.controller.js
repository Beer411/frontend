;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory',

			function ($scope, ItemsFactory, $routeParams) {


				$scope.getBeers = '';
				$scope.getBars = '';
				$scope.Items = [];
			
			

				ItemsFactory.getBeers().success( function (response) {
        			$scope.items = response.beer;
        			//console.log(response.beer);
      				});


				ItemsFactory.getBars().success( function (response) {
			  		$scope.items = response.bar;
			  		console.log(response.bar);
			  		});

			 	//adding Beers
			  	$scope.addBeers = function(itemObj) {
			  		console.log(itemObj);
			  		ItemsFactory.addBeers(itemObj)
			  		.success( function (res) {
			  			//console.log(res);
			  			$scope.item = {};
			  			$scope.items.push(itemObj);
			  			}
			  		);
			  	}

			  	//adding Bars
				$scope.addBars = function(itemObj) {
					//console.log(itemObj);
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