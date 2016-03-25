var app = angular.module('sampleApp',[]);
app.controller('sampleAppController',function($scope, $http, $rootScope){
	$scope.submit = function() {
		$http.get('/service?name=' + $scope.name);
	};
	$rootScope.name1 = ["angular1","angular2","angular3"];
});
app.controller('sampleAppController1',function($scope, $http){
	
});


