angular.module('ListaCtrl', [])

.controller('ListaCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionic.material.motion.fadeSlideInRight();

    // Set Ink
    ionic.material.ink.displayEffect();
});