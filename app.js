angular.module("mainApp", ['ngRoute'])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/angular/UI/startPage.html'
    })
    .when('/Page2', {
        templateUrl: "/angular/UI/Page2.html"
    });

} ])
.run(function () {

})

.controller("sideBar", ["$scope", function ($scope) {
    $scope.menu = ['Home', 'Email', 'Search'];
} ])

 .controller("canvas", ['$scope', '$http', function ($scope, $http) {

 } ]);
