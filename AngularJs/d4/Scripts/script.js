var app = angular.module("test", []);
app.controller("t", function ($scope) {
    var country = {
        name: "India",
        capital: "delhi",
            Image: "/Image/BackGround..jpeg"
    };
    $scope.country = country;
});



var demoApp = angular.module("demoApp", [])
    .controller("demoController", function
        ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 20;
            $anchorScroll();
        }
    });


var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/Home", {
                templateUrl: "Templates/Home.html",
                controller: "homeController"
            })
            .when("/Course", {
                templateUrl: "Templates/Course.html",
                controller: "CourseController"
            })
            .when("/Employee", {
                templateUrl: "Templates/Employee.html",
                controller: "EmployeeController"
            })
    })
    .controller("HomeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("CourseController", function ($scope) {
        $scope.Course = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("EmployeeController", function ($scope, $http) {
        $http.get("EmployeeService.asmx/GetAllEmployees")
            .then(function (response) {
                $scope.Employee = response.data;
            })
    })