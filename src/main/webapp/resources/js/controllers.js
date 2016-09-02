
var simpleChatControllers = angular.module('simpleChatControllers', []);

simpleChatControllers.controller('NewMessageCtrl', ['$scope', 'MessageService',
    function NewMessageCtrl($scope, MessageService) {

        $scope.submit = function (message) {
            var messageData = {
                    "name": message.name,
                    "text": message.text
            };
//            $scope.messageList.push(messageData);

            MessageService.save({}, messageData,
                    function success(response) {
                        console.log("Success saving:" + JSON.stringify(messageData));
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                    }
            );
            message.name = "";
            message.text = "";
        };
    }
]);
