; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ItemsFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

			var user = UserFactory.user();


			//get list of beers
			var getBeerLists = function () {
				 return $http.get(SERVER.URL + 'beers/list', {
				 	console.log(res);
          	
				});
			};

			//get list of bars
			var getBarLists = function (listId) {
				return $http.get(SERVER.URL + 'bars/list',{
	
				});
			};

			//adding a beer
			var addBeerItem = function (itemObj) {
				$http.post(SERVER.URL + '/beers' + itemObj);
				.success(function (res);

			};
			//adding a bar
			var addBarItem = function (itemObj) {
				$http.post(SERVER.URL + '/bars' + itemObj);
				.success(function (res);
			};
s

			return {
				getBeers = getBeerLists,
				getBars = getBarLists,
				addBeers = addBeerItem,
				addBars = addBarItem,
			}



		}

	])

}());