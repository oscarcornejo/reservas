 angular
    .module('homer')
    .controller('profesionalesCtrl', ['$scope', 'profesionales', function($scope, profesionales){
    profesionales.get(function(data){
      $scope.profesionales = data.profesionales;
    });

  }])