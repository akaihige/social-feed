'use strict';

module.exports = function($http, $q){

    var $http,
        $q;

    var Circle = function(){
        this.friends = [];
    };

    Circle.prototype = {
        getFriends: function(){
            var me = this,
                deferred = $q.defer();

            $http.get('/data/friends.json')
                .then(function success(response){
                    me.friends = me.friends.concat(response.data);
                    deferred.resolve(me.friends);
                }, function error(err){
                    console.log(err);
                    return me.friends;
                });

            return deferred.promise;
        }
    };

    //create Singleton
    var circle = new Circle();

    return circle;
};
