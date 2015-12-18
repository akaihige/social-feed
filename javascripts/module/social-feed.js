'use strict';

angular.module('socialFeedApp', [
    'ngSanitize',
    'angularMoment',
    'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var states = {};

    states.main = {
        url: '/',
        abstract: true,
        templateUrl: '/templates/main.html',
        controller: 'mainController'
    }

    states.home = {
        url: 'home',
        parent: 'main',
        views: {
            'mainPane@main': {
                templateUrl: '/templates/feed/list.html',
                controller: 'feedController'
            },
            'rightPane@main': {
                templateUrl: '/templates/friends/list.html',
                controller: 'friendsController'
            }
        }
    };

    states.feed = {
        url: 'feed',
        parent: 'main',
        templateUrl: '/templates/feed/list.html',
        controller: 'feedController'
    };

    states.friends = {
        url: 'friends',
        parent: 'main',
        templateUrl: '/templates/friends/list.html',
        controller: 'friendsController'
    };

    for (var key in states) {
        var state = states[key];
        state.name = key;
        $stateProvider.state(state);
    }

}]).run(['$rootScope', '$window', '$state', function($rootScope, $window, $state){

    $rootScope.$on("$stateChangeSuccess", function (event, toState, fromState) {
        $window.scrollTo(0, 0);
    });

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        $rootScope.routeClasses = toState.name + '-route';
    });

    $rootScope.$state = $state;

}]);
