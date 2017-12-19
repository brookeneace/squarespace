'use strict';

angular.module('squarespaceApp')
.service('dataService', function($http){
	
	this.helloConsole = function(){
		console.log('this is the hello console service!');
	};
	
	this.getAssets = function(callback){
		$http.get('mock/assets.json')
		.then(callback)
	};
	

});