;(function (){
  
  'use strict';

  angular.module('BeerFinder')

  .factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

    function ($http, SERVER, $cookieStore, $location) {

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

      // Login a User
      var loginUser = function (userObj) {
        
        $http.post(SERVER.URL + 'users/sign_in', userObj, SERVER.CONFIG)
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