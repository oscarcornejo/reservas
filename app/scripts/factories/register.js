function Usuario($resource) {
    return $resource('http://reservaslab.com/usuarios/:id',{id:'@_id'},{
      update: {method: 'PUT', params: {id: '@id'}}
    })
};

	/**
 * Pass function into module
 */
angular
    .module('homer')
    .factory('Usuario', Usuario)