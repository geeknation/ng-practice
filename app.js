angular.module("mainApp", ['ngRoute'])

.config(["$routeProvider", function ($routeProvider) {
    console.log($routeProvider);
    $routeProvider.
    when('/angular/', {
        templateUrl: 'UI/startPage.html'     
    })

    .when('/angular/#/Page2', {
        templateUrl: "/UI/Page2.html"
       
    });

} ])
.run(function () {

})

.controller("sideBar", ["$scope", function ($scope) {
    $scope.menu = ['Home', 'Email', 'Search'];
} ])

 .controller("canvas", ['$scope', '$http', function ($scope, $http) {
     $scope.canvas = "Canvas";
     $http.get('data.php').success(function (data) {
         $scope.data = data;
     });
 } ]);

