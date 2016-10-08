'use strict';

angular.module('homer')
	.controller('loginCtrl', function(authUser) {
	var vm = this;
	vm.loginForm = {
		email: '',
		password: ''
	};

	vm.login = function(){
		authUser.loginApi(vm.loginForm);
	}

	vm.loginGooglePlus = function(){
		authUser.loginGooglePlus();
	}
});
