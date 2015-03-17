; (function () {

	'use strict'

	angular.module('Beer411')

	.factory('ItemsFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

			var user = UserFactory.user();


			


			//get list of beers
			var getBeerLists = function (listId) {
				 return $http.get(SERVER.URL + '/beers', {

				});
			};

			//get list of bars
			var getBarLists = function (listId) {
				return $http.get(SERVER.URL + '/bars', {
	
				});
			};


			//adding a beer
			var addBeer = function (itemObj) {
				 //console.log(itemObj);
				 return $http.post(SERVER.URL + 'beers', itemObj);
				
			

			};
			//adding a bar
			var addBar = function (itemObj) {
				return $http.post(SERVER.URL + 'bars', itemObj);
				
			};


			return {
				getBeers: getBeerLists,
				getBars: getBarLists,
				addBeers: addBeer,
				addBars: addBar
				
     		};
    	}	
  	])

}());