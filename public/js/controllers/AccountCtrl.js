app.controller('AccountCtrl',
function ($routeParams, $http) {
    var vm = this;

    vm.login = function(){
		console.log('login function');
		
    }

    vm.signUp = function (){
		$http.post('/api/User', vm.acc)
            .success(function(data) {
                vm.acc = {}; // clear the form so our user is ready to enter another
                vm.user = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });
    }

});
