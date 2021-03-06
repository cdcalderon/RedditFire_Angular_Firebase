/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name newsApp
 * @description
 * # newsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('newsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', "https://newsfire.firebaseio.com/posts/")
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl as vm'
      })
        .when('/posts/:postId', {
            templateUrl: 'views/showPost.html',
            controller: 'PostViewCtrl as vm'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function(Auth){
                    return Auth.resolveUser();
                }
            }
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function (Auth) {
                    return Auth.resolveUser()
                }
            }
        })
      .otherwise({
        redirectTo: '/'
      });
  });
