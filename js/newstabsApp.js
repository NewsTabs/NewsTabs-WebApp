var app = angular.module('newstabsApp', ['ngRoute', 'ngMaterial']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'newstabsController'
    })
    .when('/search', {
        templateUrl: 'pages/search.html',
        controller: 'newstabsSearchController'
    });

});

/*
References
https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
*/