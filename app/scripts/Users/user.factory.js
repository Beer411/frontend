;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

          //Get current user
            var currentUser = function () {
              return $cookieStore.get('currentUser');
              console.log('currentUser');
            };
			     
          //check User status
            var checkLoginStatus = function () {
              var user = currentUser();
                if (user) {
                  SERVER.CONFIG.headers["authentication_token"] = res.authentication_token;
                }
            };

           // Register a User
      			  var registerUser = function (userObj) {
                  //console.log(userObj);
        			$http.post(SERVER.URL + 'users', {user: userObj})
          				.success( function (res) {	
          			    
                }

        			);

      			};


      		//login
              var loginUser = function (userObj) {
                  console.log(userObj);
                
                $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                  .success( function (res) {
                    $cookieStore.put('currentUser', res.data);
                  });
                             
            };

          //logout User
              var logoutUser = function () {
                $cookieStore.remove('currentUser');
                $location.path = ('/login');
              };
      

          	

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