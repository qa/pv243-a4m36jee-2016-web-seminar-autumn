
var simpleChatControllers = angular.module('simpleChatControllers', []);

simpleChatControllers.controller('NewMessageCtrl', ['$scope', 'MessageService',
    function NewMessageCtrl($scope, MessageService) {


        $scope.submit = function (message) {

            var date = Date.now();
            var messageData = {
                    "name": message.name,
                    "text": message.text,
                    "date": date
            };
            $scope.messageList.push(messageData);

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

simpleChatControllers.controller('MessageCtrl', ['$scope', 'MessageService',
    function MessageCtrl ($scope, MessageService) {

        MessageService.get({},
                function success(response) {
                    console.log("Success:" + JSON.stringify(response));
                    $scope.messageList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
         )

    }
]);