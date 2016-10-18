angular.module('pet')

.controller('ResultController', function ($scope, $http) {
  $scope.getPets = function() {
    return $http({
      method: 'GET',
      url: '/getDB'
    })
    .then(function(resp) {
      var newArray = []
      resp.data.forEach(function(data) {
        if(data !== '{}') {
          newArray.push(JSON.parse(data))
          
        }
      })
      $scope.data = newArray;
      console.log(JSON.parse(resp.data[0]))
    })
  }

});