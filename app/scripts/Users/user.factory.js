;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {


			 // Register a User
      			var registerUser = function (userObj) {
                  //console.log(userObj);
        
        			$http.post(SERVER.URL + 'users', {user: userObj})
          				.success( function (res) {
           
            				SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
            				$location.path('/' + res.user.id);
          				}
        			);

      			};


      		//login
              var loginUser = function (userObj) {
                  console.log(userObj);
                $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                  .success( function (res) {
                     SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
                    $location.path('/yourteams/' + res.user.id);
                  }
              );               
            };
      

          	

          	return {
          		register : registerUser,
        		  login : loginUser
          		};

          	}

         ]);

}());