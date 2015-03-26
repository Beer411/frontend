;(function () {
 
 'use strict';

 angular.module('Beer411', ['ngRoute', 'ngCookies'])

 .constant('SERVER', {
   
   URL: 'https://calm-scrubland-8623.herokuapp.com/',
   
   CONFIG: {
     
     headers : {
       'Content-Type' : 'application/json'
     }
   } 
 })

 .config([ '$routeProvider', 

    function ($routeProvider) {

      $routeProvider

        // Login Page
          .when('/login', {
            templateUrl: '/scripts/Users/user.login.tpl.html',
            controller: 'UserCtrl'
          })

        // Register Page 
          .when('/register', {
            templateUrl: '/scripts/Users/user.register.tpl.html',
            controller: 'UserCtrl'
          })

          //Beers list
          .when('/beers', {
            templateUrl: '/scripts/lists/lists.Beers.tpl.html',
            controller: 'ListBeersCtrl'
          })

          //Bars list
          .when('/bars', {
            templateUrl: '/scripts/lists/lists.Bars.tpl.html',
            controller: 'ListBarsCtrl'
          })

          //add item to Beers list
          .when('/addBeers', {
           templateUrl: '/scripts/items/items.beers.lists.tpl.html',
            controller: 'ItemsCtrl'
          })

          //add items to Bars list
          .when('/addBars', {
            templateUrl: 'scripts/items/items.bars.lists.tpl.html',
            controller: 'ItemsCtrl'
          })

          //add comments
         // .when('/addComments', {
          //  templateUrl: 'scripts/comments/comments.Beers.tpl.html',
         //   controller: 'ComCtrl'
         // })

          //show a single beer
           .when('/beer/:id', {
            templateUrl: '/scripts/lists/lists.getBeer.tpl.html',
            controller: 'ListSingleBeerCtrl'
          })

          //show a single bar
          .when('/bar/:id', {
            templateUrl: 'scripts/lists/lists.getBar.tpl.html',
            controller: 'ListSingleBarCtrl'
          })

        //.otherwise('/');
   
  }])
        .run([ '$rootScope', 'UserFactory', 'SERVER',

            function ($rootScope, UserFactory, SERVER) {

              $rootScope.$on('$routeChangeStart', function () {
        
        // Run my Login Status
                UserFactory.status();

      })
    
   }


      // inject $rootScope
      // put an $on on $rootScope
      // watch for $onRouteChangeStart
      // run UserFactory.status


  ])


}());
;(function (){
  
  'use strict';

  angular.module('Beer411')

  .controller('NavCtrl', ['$scope', 'UserFactory', 

    function ($scope, UserFactory) {
    
      var user = UserFactory.user();

        if (user) {
          $scope.loggedin = true;
          $scope.user = user;
        } else {
          $scope.loggedin = false;
        }


      $scope.logout = function () {
        UserFactory.logout();
      };  


    }

  ])

}());
;(function (){
  
  'use strict';

  angular.module('Beer411')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

        function ($scope, UserFactory, $location) {


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
;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

              //get current user
                var currentUser = function () {
                  return $cookieStore.get('currentUser');

                };

              // Register a User
      			   var registerUser = function (userObj) {
                  $http.post(SERVER.URL + 'users', {user: userObj})
                    .success( function (res) { 
                        //console.log*(res); 
                     }
        			     );
      			     };

                //check user status
                var checkLoginStatus = function () {
                  var auth = currentUser ();
                  if (auth) {
                    SERVER.CONFIG.headers['auth-token'] = auth;
                  }
                };

      		    //login
                var loginUser = function (userObj) {
                  //console.log(userObj);
                  $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                    .success( function (res) {
                        //console.log(res);
                    $cookieStore.put('currentUser', res.user.authentication_token);

                 }
               );               
             };

              // Logout Method
                var logoutUser = function () {
                  $cookieStore.remove('currentUser');
                  $location.path('/login');
              }

             

      

          	

          	     return {
          		      register : registerUser, 
                    login : loginUser,
                    logout : logoutUser,
                    user: currentUser,
                    status : checkLoginStatus
          
          		};

          	}

         ]);

}());
;(function () {

	'use strict'

	angular.module('Beer411')

		.controller('ListBeersCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

				function ($scope, ListsFactory, $routeParams, $locaton) {

			 		$scope.lists = [];
			 		$routeParams.id;
			 		

         			ListsFactory.getBeers().success( function (response) {
					$scope.lists = response.beer;
					//console.log(response.beer);
					});

         			//show single beer from list
					//$scope.getBeer = function (l) {
					//  console.log(l);
					//   ListsFactory.getBeer(l)
					//	.success (function (res) {
					//		console.log(res);
					//	});

					//};
					


        }

      ])



}());
; (function () {

	'use strict'

	angular.module('Beer411')


		.controller('ListBarsCtrl', ['$scope', 'ListsFactory',

				function ($scope, ListsFactory) {

					$scope.lists = [];

					ListsFactory.getBars().success( function (response) {
					$scope.lists = response.bar;
					//console.log(response.bar);
					});


						//show single beer from list
					//$scope.getBar = function (l) {
					//   ListsFactory.getBar(l)
					//	.success (function (res) {
					//		console.log(res);
					//	});

					//};

		}
	])
}());


; (function () {

		'use strict'

		angular.module('Beer411')

		.controller('ListSingleBeerCtrl', [ '$scope', 'ListsFactory', '$routeParams', '$location',

			function ($scope, ListsFactory, $routeParams, $location) {

			 	var beerId = $routeParams.id;

				ListsFactory.getBeer(beerId)
				.success (function (res) {
					//console.log(res);
					$scope.beer = res.beer;
					$scope.bars = res.bars;

				});
					


        }

      ])



}());
; (function () {

 	'use strict'

 	angular.module('Beer411')

 	
		.controller('ListSingleBarCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

				function ($scope, ListsFactory, $routeParams, $location) {

			 		var barId = $routeParams.id;
			 		

						ListsFactory.getBar(barId)
							.success (function (res) {
								//console.log(res);
								$scope.bar = res.bar;
								$scope.beers = res.beers;

								});


					


        }

      ])



}());
; (function () {

	'use strict'

	angular.module('Beer411')

		.factory('ListsFactory', ['$http', 'SERVER', 'UserFactory',

			function ($http, SERVER, UserFactory) {

var user = UserFactory.user();
				
				
				//get list of beers
				var getBeerLists = function () {
					 return $http.get(SERVER.URL + 'beers', {
          				//cache: true
					});
				};
				
				//get list of bars
				var getBarLists = function () {
					return $http.get(SERVER.URL + 'bars', {
						//cache: true
					});
				};
				
				//get single beer info
				var getSingleBeer = function (l) {
					//console.log(l);
					return $http.get(SERVER.URL + 'beers/' + l);
				};
				//get single bar info
				var getSingleBar = function (l) {
					return $http.get(SERVER.URL + 'bars/' + l);
				};
				



			

				return {
					getBars : getBarLists,
					getBeers : getBeerLists,
					getBeer : getSingleBeer,
					getBar : getSingleBar
				};      			

			}

	])			

}());


; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ascBarCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

		function ($scope, ListsFactory, $routeParams, $location) {

			$scope.lists = [];
			var beerId = $routeParams.id;

			ListsFactory.getBeer(beerId)
				.success (function (res) {
					console.log(res);
					$scope.beer = res.beer;
					$scope.bars = res.bars;
					});



			var barId = $routeParams.id;
			 		
			ListsFactory.getBar(barId)
				.success (function (res) {
				 console.log(res);
				$scope.bar = res.bar;
				$scope.beers = res.beers;

				});

			$scope.addBar = function (bar) {
				// asc factory add one bar
			}

			
			










			}
		])

}());
; (function () {

	'use strict'

	angular.module('Beer411')

	.controller('ascBeerCtrl', ['$scope', 'ListsFactory', '$routeParams', '$location',

		function ($scope, ListsFactory, $routeParams, $location) {

			var barId = $routeParams.id;
			 		

			ListsFactory.getBeer(barId)
				.success (function (res) {
				console.log(res);
				$scope.beer = res.beer;
				$scope.bars = res.bars;
				});
		}

	])

}());


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


;(function () {


	'use strict'

	angular.module('Beer411')

	.controller('ItemsCtrl', ['$scope', 'ItemsFactory',

			function ($scope, ItemsFactory, $routeParams) {


				//$scope.getBeers = '';
				//$scope.getBars = '';
				$scope.items = [];

			 	//adding Beers
			  	$scope.addBeers = function(itemObj) {
			  		console.log(itemObj);
			  		ItemsFactory.addBeers(itemObj)
			  		.success( function (res) {
			  			$scope.item = {};
			  			$scope.items.push(itemObj);
			  			}
			  		);
			  	};

			  	//adding Bars
				$scope.addBars = function(itemObj) {
					ItemsFactory.addBars(itemObj)
					.success( function (res) {
						$scope.item = {};
						$scope.items.push(itemObj);

						}
					);
				};
				

		  



		  }

		])
	
}());
; (function () {

	'use strict'

	angular.module('Beer411')

	.factory('ItemsFactory', ['$http', 'SERVER', 'UserFactory',

		function ($http, SERVER, UserFactory) {

			var user = UserFactory.user();
			
			//get current user
			 var currentUser = function () {
                  return $cookieStore.get('currentUser');
                  console.log(currentUser);
                };

			//adding a beer
			var addBeer = function (itemObj) {
				 return $http.post(SERVER.URL + 'beers', itemObj, SERVER.CONFIG);
			};
			
			//adding a bar
			var addBar = function (itemObj) {
				//console.log(itemObj);
				return $http.post(SERVER.URL + 'bars', itemObj, SERVER.CONFIG);	
			};

			
			

			


			return {
				//getBeers: getBeerLists,
				//getBars: getBarLists,
				addBeers: addBeer,
				addBars: addBar,
				user : currentUser,
				//showBeer : showSingleBeer,
				//showBar : showSingleBar
				
     		};
    	}	
  	])

}());