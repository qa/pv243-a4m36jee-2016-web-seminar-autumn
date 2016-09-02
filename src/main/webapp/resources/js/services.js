
var simpleChatServices = angular.module('simpleChatServices', ['ngResource']);

simpleChatServices.factory('MessageService', ['$resource',
    function($resource) {
        return $resource("./api/v1/messages", {}, {
            get: {method: 'GET', cache: false, isArray: true},
            save: {method: 'POST', cache: false, isArray: false}
        });
    }]);