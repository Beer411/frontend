;(function () {
 
 'use strict';

 angular.module('Beer411', ['ngRoute', 'ngCookies'])

 .constant('SERVER', {

   //rootUrl:'https';
   
   URL: 'https://calm-scrubland-8623.herokuapp.com',
   
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
          .when('/', {
            templateUrl: '/scripts/users/login.tpl.html',
            controller: 'UserCtrl'
          })

        // Register Page 
          .when('/register', {
            templateUrl: '/scripts/users/register.tpl.html',
            controller: 'UserCtrl'
          })

        //main page
          .when('/team', {
          templateUrl: '/scripts/users/main.tpl.html',
          controller: 'UserCtrl'
          })
  
        // Go Home ET
        .otherwise('/');
   
 }]);


}());