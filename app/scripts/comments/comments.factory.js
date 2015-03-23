; (function () {

    'use strict'

    angular.module('Beer411')

    .controller('CommentsFactory', ['$http', 'SERVER', 'UserFactory',

    	function ($http, SERVER, UserFactory) {


    		var user = UserFactory.user();

    		var currentUser = function () {
                  return $cookieStore.get('currentUser');
                  console.log(currentUser);
                };


            var addComment = function () {
            	return $http.post(SERVER.URL + 'beers', itemObj, SERVER.CONFIG);

            };

            return {
            	addComments : addComment,
            	user : currentUser
            };
    	}

    ])

}());