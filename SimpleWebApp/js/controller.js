'use strict';

/* Controllers Module for studentDetailApp application*/
var studentControllerModule =  angular.module('studentDetailApp.controllers', []);

/*StudentController: controller for  students*/
studentControllerModule.controller('StudentController', function($rootScope, $scope, $location,$routeParams) {

    $scope.appName="Student Detail Application";
    $scope.authorName = "Sandeep Kumar Patel"  ;

});
