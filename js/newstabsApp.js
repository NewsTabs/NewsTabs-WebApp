var app = angular.module('newstabsApp', ['ngRoute', 'ngMaterial']);


app.config(function($routeProvider) {
    $routeProvider

        .when('/search', {
        templateUrl: 'pages/search.html',
        controller: 'newstabsSearchController'
    })

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'newstabsController'
    });

});

/*
References
https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
*/