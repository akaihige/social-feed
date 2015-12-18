'use strict';

module.exports = function () {
    return {
        restrict: 'A',
        template: '<div ng-repeat="circle in circles" class="spinner"></div>',
        scope: {
            numCircles: '='
        },
        link: function ($scope, $elem, $attrs) {
            var circlesArr = [];
            for(var i = 0; i < $scope.numCircles; i++){
                circlesArr.push(i);
            }
            $scope.circles = circlesArr;
        }
    };
};
