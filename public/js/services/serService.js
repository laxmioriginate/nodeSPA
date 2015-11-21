'use strict';

 angular.module('SerService', []).factory('Service', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/services');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new service
        create : function(serviceData) {
            return $http.post('/api/services', serviceData);
        },

        // call to DELETE a service
        delete : function(id) {
            return $http.delete('/api/services/' + id);
        }
    }       

}]);


