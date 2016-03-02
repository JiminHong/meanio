var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'views/feed.html',
		controller 	: 'FeedCtrl', function($scope, $http){

		}
	})

});