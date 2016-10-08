
angular
    .module('homer')
    .controller('registerCtrl', ['$scope', 'Usuario', '$location', 'sweetAlert', 'notify', function($scope, Usuario, $location, sweetAlert, notify){
          $scope.usuario = {
                  name: "andres alvarez",
                  contacto: "56396996",
                  email: "andres.alvarez.as@gmail.com",
                  password: "123"
                }             
      $scope.submit = function(){
        Usuario.save($scope.usuario).$promise.then(function(data){
            if (data.msg) 
            {
                
                angular.copy({}, $scope.usuario);
                notify({ message: 'Cuenta creada con éxito', classes: 'alert-success'});

                $location.path('common.login');
            }else {
                
                sweetAlert.swal("Cancelado", "No se ha podido crear su Cuenta", "error");
            }
        });
      }
  }])
