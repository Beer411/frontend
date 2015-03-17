;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory', '$routeParams',

		function ($scope, ItemsFactory, $routeParams) {

			$scope.listBeerName = '';
			$scope.listBarName = '';		
			$scope.items = [];

			 ItemsFactory.listBeerName($routeParams.id).success ( function (data) {
        		$scope.listBeerName = data.name;
      			});

      		ItemsFactory.get($routeParams.id).success( function (data) {
        		$scope.items = data.results;
      			});


			$scope.addBeers = function (itemObj) {
        		ItemsFactory.add(itemObj, $routeParams.id)
          			.success( function (res) {
            			$scope.item = {};
            			$scope.items.push(itemObj);
          				}
        			);
      			};


      			ItemsFactory.listBarName($routeParams.id).success (function (data) {
      				$scope.listBarName = data.name;
      			});

      			ItemsFactory.get($routeParams.id).success( function (data) { 
      				$scope.items = data.results;
      			});

      		$scope.addBars = function (itemObj) {
      			Itemsfactory.add(itemObj, $routeParams.id)
      			.success( function (res) {
      				$scope.item = {};
      				$scope.items.push(itemObj);
      				}
      			);

      		};
      			







      		
      		




		}


	]);

}());