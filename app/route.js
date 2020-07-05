var app=angular.module("app1", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "templates/about.html",
        controller:"aboutCtrl"
    })
    .when("/home", {
        templateUrl : "templates/home.html",
        controller:"homeCtrl"
    });
});
    
