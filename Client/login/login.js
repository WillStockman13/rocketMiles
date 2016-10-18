angular.module('pet')

.controller('LogInController', function ($scope, $http, $location) {
  $scope.auth = function(obj) {
    if(obj) {
      $location.path('/#/pets')
    }
  }

});