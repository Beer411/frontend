;(function (){
  
  'use strict';

  angular.module('Beer411')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

    function ($scope, UserFactory, $location) {

      // Register Method
      $scope.registerUser = function (userObj) {
         console.log(userObj);
          UserFactory.register({user: userObj});
      };

      // Login Method
      $scope.loginUser = function (userObj) {
        // console.log(userObj);
        UserFactory.login({user: userObj});
      };


    
    }

  ]);

}());