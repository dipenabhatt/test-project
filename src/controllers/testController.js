(function () {
    angular.module('myProject.com')
        .controller("TestCtrl", ['$scope',function ($scope) {

            $scope.pageTitle = "Test Project";
            $scope.pageName = "Hello World!";
            $scope.currentLocation = "Fremont,CA";
    }]);
}());