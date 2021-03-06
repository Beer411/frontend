;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

              //get current user
                var currentUser = function () {
                  return $cookieStore.get('currentUser');

                };

              // Register a User
      			   var registerUser = function (userObj) {
                  $http.post(SERVER.URL + 'users', {user: userObj})
                    .success( function (res) { 
                        //console.log*(res); 
                     }
        			     );
      			     };

                //check user status
                var checkLoginStatus = function () {
                  var auth = currentUser ();
                  if (auth) {
                    SERVER.CONFIG.headers['auth-token'] = auth;
                  }
                };

      		    //login
                var loginUser = function (userObj) {
                  //console.log(userObj);
                  $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                    .success( function (res) {
                        //console.log(res);
                    $cookieStore.put('currentUser', res.user.authentication_token);

                 }
               );               
             };

              // Logout Method
                var logoutUser = function () {
                  $cookieStore.remove('currentUser');
                  $location.path('/login');
              }

             

      

          	

          	     return {
          		      register : registerUser, 
                    login : loginUser,
                    logout : logoutUser,
                    user: currentUser,
                    status : checkLoginStatus
          
          		};

          	}

         ]);

}());