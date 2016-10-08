angular
    .module('homer')
    .controller('calendarController', calendarController)

   function calendarController($scope) {
   		$scope.day = moment();

   		$scope.mostrarHoras = function(selected) {
    		console.log("Algo paso!")
  		}
	};