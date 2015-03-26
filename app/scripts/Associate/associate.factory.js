; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('AscFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

		









			//get single bar info
				var addoneBar = function (itemObj) {
					return $http.get(SERVER.URL + 'glass', itemObj );
				};
				







	}

	])

}());

