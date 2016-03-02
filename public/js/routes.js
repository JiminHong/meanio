var app = angular.module('app', ['ngRoute', 'ngMaterial'])

app.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'views/feed.html',
		controller 	: 'FeedCtrl', function($scope, $http){

		}
	})
	.when('/account', {
		templateUrl : 'views/account.html',
		controller : 'AccountCtrl',
		controllerAs : 'acc'
	})

});
