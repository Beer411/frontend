; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ComCtrl', ['$scope', 'CommentsFactory',

		function ($scope, CommentsFactory) {

			$scope.comments = [];

			$scope.addBeerComments = function (itemObj) {
				CommentsFactory.addBeerComments(itemObj)
				.success (function (res) {
					$scope.comment = {};
					$scope.comments.push(itemObj);

				});
			};
		




		}

	])


}());