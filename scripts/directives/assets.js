angular.module('squarespaceApp')
.directive('assets', function(){
	return{
		templateUrl: 'templates/portfolio.html', 
		controller: 'mainCtrl'
	}
});