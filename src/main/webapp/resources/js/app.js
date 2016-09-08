'use strict';

/* App Module */

var simpleChat = angular.module('simpleChat', [
    'ngRoute',
    'simpleChatControllers',
    'simpleChatServices'
]);


simpleChat.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'MessageCtrl'
                });
    }
]);
