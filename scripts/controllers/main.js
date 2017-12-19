'use strict';

angular.module('squarespaceApp')
.controller('mainCtrl', function($scope, dataService){

	
	$scope.helloConsole = dataService.helloConsole;
	
	
	dataService.getAssets(function(response){
			console.log(response.data);
			$scope.assets = response.data; 
	});
	

})