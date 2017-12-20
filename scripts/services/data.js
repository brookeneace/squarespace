'use strict';

angular.module('squarespaceApp')
.service('dataService', function($http){
	
	this.getAssets = function(callback){
		$http.get('mock/assets.json')
		.then(callback)
	};
	

});