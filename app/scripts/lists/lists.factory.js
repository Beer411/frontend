;(function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {

				var user = UserFactory.user();

				var getAllLists = function () {
					 return $http.get(SERVER.URL + 'beers/Lists', {
					 	headers: SERVER.CONFIG.headers,
          				cache: true
				});
			};

			 return {
        		get : getAllLists
        
      			};

		}

	])			

}());

