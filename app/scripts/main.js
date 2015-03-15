;(function () {
 
 'use strict';

 angular.module('Beer411', ['ngRoute', 'ngCookies'])

 .constant('SERVER', {

   //rootUrl:'https';
   
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
            controller: 'ListCtrl'
          })

          //Bars list
          .when('/bars', {
            templateUrl: '/scripts/lists/lists.Bars.tpl.html',
            controller: 'ListCtrl'
          })

          //add item to Beers list
          //.when('/beers', {
          // templateUrl: '/scripts/items/items.beers.tpl.html',
          //  controller: 'ItemsCtrl'
          //})

          //add items to Bars list
          //.when('/bars', {
          //  templateUrl: 'scripts/items/items.bars.tpl.html',
          //  controller: 'ItemsCtrl'
          //})
         
        // Go Home ET
        .otherwise('/');
   
  }]);


}());