'use strict';

module.exports = function($http, $q){

    var $http,
        $q;

    var Feed = function(){
        this.posts = [];
    };

    Feed.prototype = {
        getPosts: function(){
            var me = this,
                deferred = $q.defer();

            $http.get('/data/feed.json')
                .then(function success(response){
                    me.posts = me.posts.concat(response.data);
                    deferred.resolve(me.posts);
                }, function error(err){
                    console.log(err);
                    return me.posts;
                });

            return deferred.promise;
        },

        createPost: function(post){
            //TODO: post to backend api
            this.posts.push(post);
        }
    };

    //create Singleton
    var feed = new Feed();

    return feed;
};
