'use strict';

module.exports = function ($scope, Circle, $sce) {

    Circle.getFriends()
        .then(function success(data){
            console.log(data);

            $scope.friends = data;
        })
        .catch(function failure(err){
            console.log('error handling placeholder', err);
        });

};

