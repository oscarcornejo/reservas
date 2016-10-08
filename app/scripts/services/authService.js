'use strict';

angular.module('authService', [])
	.factory('sessionControl', function(){
		return {
			get: function(key){
				return sessionStorage.getItem(key);
			},
			set: function(key, val){
				return sessionStorage.setItem(key, val);
			},
			unset: function(key){
				return sessionStorage.removeItem(key);
			}
		};
	})
	.factory('authUser', function($auth, GooglePlus, sessionControl, $location, sweetAlert, notify){
		var cacheSession = function(email, username, avatar){
			sessionControl.set('userIsLogin', true);
			sessionControl.set('email', email);
			sessionControl.set('username', username);
			sessionControl.set('avatar', avatar);
		};

		var unCacheSession = function(){
			sessionControl.unset('userIsLogin');
			sessionControl.unset('email');
			sessionControl.unset('username');
			sessionControl.unset('avatar');
		};

		var login = function(loginForm) {
			$auth.login(loginForm).then(
				function(response){
					if (typeof response.data.user != 'undefined') {
						cacheSession(response.data.user.email, response.data.user.name, loginForm.avatar);
						$location.path('/dashboard');
						notify({ message: 'Sesión iniciada con éxito', classes: 'alert-success'});
					}
					
				},

				function(error){
					unCacheSession();		
					if (error.data.error === 'invalid_credentials') {						
				        sweetAlert.swal({
				            title: "Advertencia",
				            text: "Email y/o Contraseña incorrecto."
				        });
					}			
				}
			);
		};

		return {
			loginApi: function(loginForm){
				login(loginForm);
			},
			logout: function(){
				$auth.logout();
				unCacheSession();
				$location.path('/');
				notify({ message: 'Sesión finalizada', classes: 'alert-Info'});
			},
			loginGooglePlus: function(){
				GooglePlus.login().then(
					function(){
						GooglePlus.getUser().then(function(response){
							var loginForm = {
								name: response.name,
								email: response.email,
								avatar: response.picture
							}

							login(loginForm);
						});
					}
				)
			},
			isLoggedIn: function(){
				return sessionControl.get('userIsLogin') !== null;
			}
		}
	});