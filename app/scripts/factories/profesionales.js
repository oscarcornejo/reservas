function usuarios($resource){
    return $resource('http://reservaslab.com/profesionales:id',{id:'@_id'},{
      update: {method: 'GET', params: {id: '@id'}}
    })
  };

 angular
    .module('homer')
    .factory('usuarios', usuarios)
 