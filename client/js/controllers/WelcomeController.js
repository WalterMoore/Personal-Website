angular.module('PersonalApp').controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
    $scope.message = "This is the Welcome View";

    $scope.forwardWord = "";

    $scope.continueToSecond = function() {
        $location.path('/second/' + $scope.forwardWord);
    };
}]);