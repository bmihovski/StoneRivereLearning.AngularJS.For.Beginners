angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", "Calculations", function($scope, Calculations) {

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = "Main Page";
        $scope.tutorialObject.subtitle = "Sub Title";

        $scope.tutorialObject.firstname = "Boyan";
        $scope.tutorialObject.lastname = "Mihovski";

        $scope.tutorialObject.bindOutput = 2;

        $scope.timesTwo = function() {
            $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
        }

    }])

.factory("Calculations", function() {
    var calculations = {};

    calculations.timesTwo = function(a) {
        return a * 2;
    };

    calculations.pythagoreanTheorum = function(a, b) {
        return (a * a) + (b * b);
    };

    return calculations;
})
