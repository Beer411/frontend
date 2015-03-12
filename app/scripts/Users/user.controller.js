;(function (){
  
  'use strict';

  angular.module('Beer411')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

        function ($scope, UserFactory, $location) {

  
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