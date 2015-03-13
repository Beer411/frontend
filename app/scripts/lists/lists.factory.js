;(function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {


				var user = UserFactory.user();
				
				//get list of beers
				var getBeerLists = function () {
					 return $http.get(SERVER.URL + 'beers/list', {
          				//cache: true
				});
			};
				

				//get list of bars
				var getBarLists = function () {
					return $http.get(SERVER.URL + 'bars/list', {
						//cache: true
					});
				};


				return {
					getBars : getBarLists,
					getBeers : getBeerLists
				};      			

			}

	])			

}());

