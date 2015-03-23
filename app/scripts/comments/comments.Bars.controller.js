; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ComCtrl', ['$scope', 'CommentsFactory',

		function ($scope, CommentsFactory) {

			$scope.comments = [];

			$scope.addBarComments = function (itemObj) {
				CommentsFactory.addBarComments(itemObj)
				.success (function (res) {
					$scope.comment = {};
					$scope.comments.push(itemObj);

				});
			};
		}
	])

}());