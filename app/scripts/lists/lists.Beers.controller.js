;(function () {

	'use strict'

	angular.module('Beer411')

		.controller('ListBeersCtrl', ['$scope', 'ListsFactory', '$location','$routeParams',

				function ($scope, ListsFactory, $location, $routeParams) {

			 		$scope.lists = [];
			 		$routeParams.id;

			  		ListsFactory.getBeers().success( function (response) {
        	  		$scope.lists = response.beer;
        	  		console.log(response.beer);
        	  		console.log(response.beer[0].id);
      		  		});

      		  		$scope.select = function (itemObj) {
      		  			ListsFactory.showBeer(itemObj)
      		  			//console.log(itemObj);
      		  			//ListsFactory.showBeer($routeParams.id)
      		  			.success (function (res) {
      		  				console.log(res);
      		  				//$scope.items.get(itemObj);
      		  				//console.log(itemObj);
      		  			}

      		  		);
      		  	};
		}

	])

}());