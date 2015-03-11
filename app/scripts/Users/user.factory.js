;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {



			//Get the current user
				var currentUser = function () {
					return $cookieStore.get('currentUser')
			};	


			 // Register a User
      			var registerUser = function (userObj) {
        
        			$http.post(SERVER.URL + 'users', userObj, SERVER.CONFIG)
          				.success( function (res) {
            			console.log(res.user.id);
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
          	

          	return {
          		register : registerUser,
        		login : loginUser
          		};

          	}

         ]);

}());