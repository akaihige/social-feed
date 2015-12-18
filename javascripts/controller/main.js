'use strict';

module.exports = function ($scope, moment, Feed) {

    $scope.feed = Feed;

    $scope.createPost = function(){
        console.log($scope.post.body);

        $scope.post.author = {
            picture: 'http://placehold.it/32x32',
            name: 'me'
        };
        $scope.post.created = moment().format("X");
        $scope.post.createdFormatted = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $scope.feed.createPost(angular.copy($scope.post));
    };

};
