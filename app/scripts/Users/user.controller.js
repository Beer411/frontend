;(function () {

	'use strict'

	angular.module('BeerFinder')

	.controller('UserCtrl',['$scope', 'UserFactory', '$location',

		function ($scope, UserFactory, $location) {
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