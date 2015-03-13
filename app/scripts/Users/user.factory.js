;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

              // Get Current User
                var currentUser = function () {
                  return $cookieStore.get('currentUser');
                };

              // Check User Status
                var checkLoginStatus = function () {
                  var user = currentUser();
                    SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
                      $location.path('/' + res.user.id);                   
                };

              // Register a User
      			   var registerUser = function (userObj) {
                  $http.post(SERVER.URL + 'users', {user: userObj})
                    .success( function (res) { 
                        //console.log*(res); 
                     }
        			     );
      			     };

      		    //login
                var loginUser = function (userObj) {
                  //console.log(userObj);
                  $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                    .success( function (res) {
                    //console.log(userObj);                   
                    $cookieStore.put('currentUser', res.data);
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
                    user : currentUser,
                    status : checkLoginStatus,
                    logout : logoutUser
          
          		};

          	}

         ]);

}());