; (function () {

	'use strict'

	angular.module('Beer411')

	.factory('ItemsFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

			var user = UserFactory.user();


			


			//get list of beers
			var getBeerLists = function () {
				 return $http.get(SERVER.URL + 'beers/list', {

				});
			};

			//get list of bars
			var getBarLists = function (listId) {
				return $http.get(SERVER.URL + 'bars/list',{
	
				});
			};

			//adding a beer
			var addBeerItem = function (itemObj) {
				return $http.post(SERVER.URL + '/beers' + itemObj);
			

			};
			//adding a bar
			var addBarItem = function (itemObj) {
				return $http.post(SERVER.URL + '/bars' + itemObj);
				
			};


			return {
				listBeerName: getBeerLists,
				listBarName: getBarLists,
				addBeers: addBeerItem,
				addBars: addBarItem
				
     		};
    	}	
  	])

}());