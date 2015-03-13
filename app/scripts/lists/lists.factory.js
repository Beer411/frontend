;(function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {

				var user = UserFactory.user();
				//get list of beers
				var searchLists = function () {
					 return $http.get(SERVER.URL + 'beers/Lists', {
          				cache: true
				});
			};


				var getLists = function () {
					return $http.get(SERVER.URL + 'bars/Lists', {
						cache: true
					});
				};

			 return {
        		get : getLists
        
      			};

		}

	])			

}());

