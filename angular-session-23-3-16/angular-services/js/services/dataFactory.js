angApp.service('serviceData', ['$http', '$q', function($http, $q){
      var deferObject,
      myMethods = {
        getPromise: function() {
                var promise       =  $http.get('http://php7.de/dummy-data.json'),
                deferObject =  deferObject || $q.defer();
 
                promise.then(
                  // OnSuccess function
                  function(success){
                    // This code will only run if we have a successful promise.
                    deferObject.resolve(success.data);
                    console.log(success);
                  },
                  // OnFailure function
                  function(failure){
                    // This code will only run if we have a failed promise.
                    deferObject.reject(failure);
                  });
 
           return deferObject.promise;
          }
       };
 
       return myMethods;
 
    }]);