'use strict';

 app.controller('ServiceController', function($scope, Service) {

     
    $scope.tagline = 'Nothing beats a pocket protector!';

    function toGetUsers(){
        Service.get()
         .then(function (response) {
             
            $scope.users = response.data.users;
            //console.log($scope.users);
                
           });
    }

    toGetUsers();
     
    $scope.userFormSubmit = function(userData){
    	//console.log(userData);
    	Service.create(userData)
    	 .then(function (response) {
            toGetUsers();
                //console.log('welcome');
           });
    }

    $scope.userDestroy = function(userId){
        //console.log(userData);
        Service.delete(userId)
         .then(function (response) {
            toGetUsers();
                //console.log('welcome');
           });
    }

    $scope.userUpdate = function(userData, id){
        $scope.user = userData;
        userData.name = "xyz11";
        Service.update(userData, id)
         .then(function (response) {
            toGetUsers();
                //console.log('welcome');
           });
    }

    $scope.userSignup = function(userData){
        console.log(userData);
        Service.signup(userData)
         .then(function (response) {
            //toGetUsers();
                //console.log('welcome');
           });
    }

});

