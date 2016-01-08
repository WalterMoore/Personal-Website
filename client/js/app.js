(function() {

    var app = angular.module('PersonalApp', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "WelcomeController",
                templateUrl: "views/welcome.html"
            })
            .when('/welcome', {
                controller: "WelcomeController",
                templateUrl: "views/welcome.html"
            })
            .when('/second/:forwardWord', {
                controller: 'SecondController',
                templateUrl: 'views/second.html'
            })
            .otherwise({
                redirectTo: '/welcome'
            })
        console.log("inside routing");
    }]);

})();