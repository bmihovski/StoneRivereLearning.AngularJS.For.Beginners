angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", function($scope) {

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = "Main Page";
        $scope.tutorialObject.subtitle = "Sub Title";

        $scope.tutorialObject.firstname = "Boyan";
        $scope.tutorialObject.lastname = "Mihovski";

        $scope.tutorialObject.bindOutput = 2;

        $scope.timesTwo = function() {
            $scope.tutorialObject.bindOutput *= 2;
        }

    }])

.directive("tbWelcomeMessage", function() {
    return {
        restrict: "AE",
        template: "<div>Howdy how are you?</div>"
    }
    });

