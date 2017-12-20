'use strict';

angular.module('squarespaceApp')
.controller('mainCtrl', function($scope, dataService){

	
// 	$scope.helloConsole = dataService.helloConsole;
	
	
	dataService.getAssets(function(response){
			console.log(response.data);
			$scope.assets = response.data; 
	});

    
    $scope.hoverAttr = function (e) {
        var id = $(e.target).data('id');
        console.log(id); // I want to get the data attribute of the element i am hovering 
        $('.portfolio').find('.item' + "[data-id='" + id +"']").addClass('active');//find the image div with the same data id and add active class
    };
    
     $scope.hoverRemove = function (e) {
        var id = $(e.target).data('id');
        console.log(id); // I want to get the data attribute of the element i am hovering 
        $('.portfolio').find('.item' + "[data-id='" + id +"']").removeClass('active');//find the image div with the same data id and remove active class
    };
	

})