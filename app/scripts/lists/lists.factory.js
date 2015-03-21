;(function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {


				var user = UserFactory.user();
				
				//get list of beers
				var getBeerLists = function () {
					 return $http.get(SERVER.URL + 'beers', {
          				//cache: true
				});
			};
				

				//get list of bars
				var getBarLists = function () {
					return $http.get(SERVER.URL + 'bars', {
						//cache: true
					});
				};

				//get a single Beer
				var showSingleBeer = function (itemObj, id) {
					return $http.get(SERVER.URL + 'beers/' + id, itemObj, {

					});
				};
				//get a single Bar
				var showSingleBar = function (itemObj) {
					return $http.get(SERVER.URL + 'bars/:id', itemObj, {

					});
				};
				


				return {
					getBars : getBarLists,
					getBeers : getBeerLists,
					showBeer : showSingleBeer,
					showBar : showSingleBar
				};      			

			}

	])			

}());

