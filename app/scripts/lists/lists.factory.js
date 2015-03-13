;(function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {

				//var user = UserFactory.user();
				//get list of beers
				var getBeerLists = function () {
					 return $http.get(SERVER.URL + 'beers/Lists', {
          				cache: true
				});
			};

			 	return {
        			get : getBeerLists
        			
      			};

				//get list of bars
				var getBarLists = function () {
					return $http.get(SERVER.URL + 'bars/Lists', {
						cache: true
					});
				};


				return {
					get : getBarLists
				};      			

			}

	])			

}());

