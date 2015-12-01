'use strict';

 app.factory('Service', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/users');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new service
        create : function(userData) {
            return $http.post('/api/users', userData);
        },

        // call to DELETE a service
        delete : function(id) {
            return $http.delete('/api/users/' + id);
        },

        update : function(userData, id) {
            return $http.put('/api/users/' + id, userData);
        },

        signup : function(userData){
            return $http.post('/api/signup', userData);
        }
    }       

}]);


