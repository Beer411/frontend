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
          .when('/addComments', {
            templateUrl: 'scripts/comments/comments.Beers.tpl.html',
            controller: 'ComCtrl'
          })

          //show a single beer
           .when('/beers/:id', {
            templateUrl: '/scripts/lists/lists.getBeer.tpl.html',
            controller: 'ListSingleBeerCtrl'
          })

          //show a single bar
          .when('/bars/:id', {
            templateUrl: 'scripts/lists/lists.getBar.tpl.html',
            controller: 'ListSingleBarCtrl'
          })


          //show a single bar
          //.when('/showBar/:id', {
          //  templateUrl: 'scripts/items/items.singleBeer.lists.tpl.html',
          //  controller: 'ItemsCtrl'
          //})
        // Go Home ET
        .otherwise('/');
   
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