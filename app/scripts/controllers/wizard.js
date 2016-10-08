/**
 *
 * wizardCtrl
 *
 */

angular
    .module('homer')
    .controller('wizardOneCtrl', wizardOneCtrl)

function wizardOneCtrl($scope, notify, sweetAlert, sucursales, usuarios) {

    // Initial user
    $scope.user = {
        username: 'Mark Smith',
        email: 'mark@company.com',
        password: 'secret_password',
        approve: false
    }

    // Initial step
    $scope.step = 1;

    // Wizard functions
    $scope.wizard =  {
        show: function(number) {
            $scope.step = number;
        },
        next: function() {
            $scope.step++ ;
        },
        prev: function() {
            $scope.step-- ;
        }
    };

    $scope.submit = function()
    {
        // Show notification
        sweetAlert.swal({
            title: "Thank you!",
            text: "You approved our example form!",
            type: "success"
        });

        // 'Redirect' to step 1
        $scope.step = 1;

    }
   
    usuarios.get(function(data){
      $scope.usuarios = data.usuarios;

    console.log($scope.usuarios);
    });


    debugger;

    sucursales.get(function(data){
      $scope.sucursales = data.sucursales;

      console.log($scope.sucursales);
    });


    

}

