'use strict';

angular.module('studentDetailApp', [ 'studentDetailApp.controllers']).

  config(['$routeProvider', function($routeProvider,StudentController) {

    $routeProvider.when('/', { controller: 'StudentController'});

    $routeProvider.otherwise({redirectTo: '/'});

  }]);
