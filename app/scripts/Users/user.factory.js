;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

			//get current user
			var currentUser = function () {
				return $cookieStore.get*('currentUser');
			};

			//check user status




			//register
				$http.post(SERVER.URL + 'user' + userObj + SERVER.CONFIG)
					.success( function (res) {
					 		SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
            		 		$location.path('/yourteams/' + res.user.id);
				
					       }
        				); 
      				};

      		//login
      		var loginUser = function (userObj) {

      			 $http.post(SERVER.URL + 'users/sign_in', userObj, SERVER.CONFIG)
          			.success( function (res) {
            				SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
            				$location.path('/yourteams/' + res.user.id);
      						
      						}
      					);
          			};

          	//var logoutUser = function () {
          	//	$cookieStore.remove('currentUser');
          	//	$location.path('/login');
          	}

          	return {
          		register: registerUser;
          		login: loginUser;
          		user: currentUser;
          	//	logout: logoutUser

          		};

          	}

         ]);

}());