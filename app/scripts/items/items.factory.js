; (function () {

	'use strict'

	angular.module('Beer411')

	.factory('ItemsFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

			var user = UserFactory.user();
			
			//get current user
			 var currentUser = function () {
                  return $cookieStore.get('currentUser');
                  console.log(currentUser);
                };

			//adding a beer
			var addBeer = function (itemObj) {
				 return $http.post(SERVER.URL + 'beers', itemObj, SERVER.CONFIG);
			};
			
			//adding a bar
			var addBar = function (itemObj) {
				//console.log(itemObj);
				return $http.post(SERVER.URL + 'bars', itemObj, SERVER.CONFIG);	
			};
			

			


			return {
				//getBeers: getBeerLists,
				//getBars: getBarLists,
				addBeers: addBeer,
				addBars: addBar,
				user : currentUser,
				//showBeer : showSingleBeer,
				//showBar : showSingleBar
				
     		};
    	}	
  	])

}());