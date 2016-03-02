app.controller('FeedCtrl', ["$scope", "$routeParams","$http",
function ($scope, $routeParams,$http) {
    console.log('FeedCtrl fired');
    $http.get('/api/fetchPosts')
	  .success(function(data){
      console.log(data);
		  // Make the data available to the DOM
		  $scope.posts = data;
	  }).error(function(){
	  });
}]);
