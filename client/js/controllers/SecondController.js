angular.module('PersonalApp').controller('SecondController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {

    $scope.forwardWord = $routeParams.forwardWord;
    $scope.forwardWord = $scope.forwardWord.toLowerCase();
    $scope.reversedWord = ($scope.forwardWord).split('').reverse().join('');

    if ($scope.forwardWord == $scope.reversedWord) {
        $scope.answer = "You've got a palindrome!";
    } else {
        $scope.answer = "Not a palindrome. Better luck next time."
    };

    $scope.returnToWelcome = function() {
        $location.path('/welcome');
    };
}]);