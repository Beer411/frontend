;(function (){
  
  'use strict';

  angular.module('Beer411')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

        function ($scope, UserFactory, $location) {

            //If currently logged in then
             var user = UserFactory.user();
              if (user) {
              return $location.path('/');
              }




            // Add a new user
            $scope.registerUser = function (userObj) {
            UserFactory.register(userObj);
            console.log(userObj);
             };

            // Login Method
            $scope.loginUser = function (userObj) {
            UserFactory.login(userObj);
            };
    
    }

  ]);

}());