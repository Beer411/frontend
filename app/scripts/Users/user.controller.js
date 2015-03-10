;(function () {

	'use strict'

	angular.module('Beer411')

	.controller('UserCtrl',['$scope', 'UserFactory', '$location',

		function ($scope, UserFactory, $location) {
				
				//Check to see if user is already logged in
				var user = UserFactory.user();
					if (user) {
						return $location.path('/');

					};
				 
				//register 
				$scope.register = function (userObj) {
					  	UserFactory.register({user: userObj});
      					};




      			//login
      			$scope.login =function (userObj) {
      					UserFactory.login({user: userObj});

      					};
				}

		}];

}());