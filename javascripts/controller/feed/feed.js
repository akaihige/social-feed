'use strict';

module.exports = function ($scope, Feed, $sce) {

    $scope.feed = Feed;

    Feed.getPosts()
        .then(function success(data){
            console.log(data);

            if(data){
                $scope.feed.posts = [];
                data.forEach(function(item){
                    item.body = $sce.trustAsHtml(item.body);
                    $scope.feed.createPost(item);
                });
            }
        })
        .catch(function failure(err){
            console.log('error handling placeholder', err);
        });

};
