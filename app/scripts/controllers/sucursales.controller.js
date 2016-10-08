  .controller('sucursalesCtrl', ['$scope', 'sucursales', function($scope, sucursales){
    sucursales.get(function(data){
      $scope.sucursales = data.sucursales;
    });

    // $scope.remove = function(id){
    //   Horarios.delete({id:id}).$promise.then(function(data){
    //       if (data.msg) {
    //         $route.reload();
    //       }
    //   })
    // }
  }])

  // .controller('EditCtrl', ['$scope', 'Horarios','$routeParams' , function($scope, Horarios, $routeParams){
  //     $scope.settings = {
  //       pageTitle: "Editar Horario",
  //       action: "Edit"
  //     }

  //     var id = $routeParams.id;
  //     Horarios.get({id:id}, function(data){
  //        $scope.horario = data.horario;
  //     })

  //     $scope.submit = function(){
  //         Horarios.update({id:$scope.horario.id}, $scope.horario).$promise.then(function(data){
  //           if (data.msg) {
  //             $scope.settings.success = "Horario editado correctamente";
  //           }
  //         })
  //     }
  // }])

  // .controller('CreateCtrl', ['$scope', 'Horarios', function($scope, Horarios){
  //     $scope.settings = {
  //       pageTitle: "Crear Horario",
  //       action: "Crear"
  //     }

  //     $scope.horario = {
  //       dia: "",
  //       mes_ano: "",
  //       hora_fin: "",
  //       hora_inicio: "",
  //       id_estado: "",
  //       id_sucursal: "",
  //       semana: "",
  //       turno: ""
  //     }

  //     $scope.submit = function(){
  //       Horarios.save($scope.horario).$promise.then(function(data){
  //           if (data.msg) 
  //           {
  //               angular.copy({}, $scope.horario);
  //               $scope.settings.success = "Horario guardado correctamente";
  //           }
  //       });
  //     }
  // }])

 