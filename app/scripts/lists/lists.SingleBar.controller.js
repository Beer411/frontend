; (function () {

 	'use strict'

 	angular.module('Beer411')

 	
		.controller('ListSingleBarCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

				function ($scope, ListsFactory, $routeParams, $location) {

					$scope.lists = [];
					$routeParams.id;

					ListsFactory.getBars().success( function (response) {
					$scope.lists = response.bar;
		
					});


         			
					$scope.getBar = function (l) {
					  
					   ListsFactory.getBar(l)
						.success (function (res) {
							console.log(res);

						});

					};
					


        }

      ])



}());