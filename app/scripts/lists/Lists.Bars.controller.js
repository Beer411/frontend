; (function () {

	'use strict'

	angular.module('Beer411')


		.controller('ListBarsCtrl', ['$scope', 'ListsFactory',

				function ($scope, ListsFactory) {

					$scope.lists = [];

					ListsFactory.getBars().success( function (response) {
					$scope.lists = response.bar;
					//console.log(response.bar);
					});


					//show single beer from list
					$scope.getBar = function (l) {
						ListsFactory.getBeer(l)
						.success (function (res) {
							console.log(res);
						});

					};

		}
	])
}());

