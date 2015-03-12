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

      ])

}());