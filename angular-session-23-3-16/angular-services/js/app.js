//Define Module
var angApp  = angular.module("angApp", []);
angApp.run(function(serviceData, $q) { 

});
//Define Controller
angApp.controller('demoController',['$scope', 'serviceData', function($scope, serviceData){
 
      var askForPromise = serviceData.getPromise();
 
      askForPromise.then(
        // OnSuccess function
        function(success) {
          $scope.userList = success;
          console.log($scope.userList);
        },
        // OnFailure function
        function(failure) {
        }
      )
}]);