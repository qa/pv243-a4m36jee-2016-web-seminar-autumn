
var messageDirective = angular.module('messageDirective', []);
messageDirective.directive('message', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/message.html'
    };
});
