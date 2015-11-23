'use strict';

 angular.module('ServiceCtrl', []).controller('ServiceController', function($scope, Service) {

     
    $scope.tagline = 'Nothing beats a pocket protector!';
    Service.get()
    	 .then(function (response) {
                console.log('welcome');
           });
});

