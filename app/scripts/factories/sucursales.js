function sucursales($resource){
    return $resource('http://reservaslab.com/sucursales/:id',{id:'@_id'},{
      update: {method: 'GET', params: {id: '@id'}}
    })
  };

 angular
    .module('homer')
    .factory('sucursales', sucursales)