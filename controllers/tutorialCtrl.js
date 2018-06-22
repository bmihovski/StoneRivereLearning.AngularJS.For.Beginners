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

.controller("TutorialCtrl2", ["$scope", function($scope) {
    $scope.secondTutorial = "This is the second tutorial!";
    }]);
