angular.module('pet')

.controller('DogsController', function ($scope, $http) {
  console.log('hello')
  $scope.generateDogLike = function() {
  	$scope.Like($scope.data);
    return $http({
    	method: 'GET',
    	url: '/generate'
    })
    .then(function(resp) {
      console.log('after resp')
      $scope.data = resp;
      $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
      $scope.name = resp.data.petfinder.pet.name['$t'];
    })
  };
  
   $scope.generateDogDisLike = function() {
    return $http({
    	method: 'GET',
    	url: '/generate'
    })
    .then(function(resp) {
      $scope.data = resp;
      $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
      $scope.name = resp.data.petfinder.pet.name['$t'];
    })
  };

  $scope.Like = function(data) {

  	var obj = {};
  	if(data) {
  		console.log(data.data.petfinder.pet.name['$t'])
	  	obj['name'] = data.data.petfinder.pet.name['$t'];
	  	obj['pic'] = data.data.petfinder.pet.media.photos.photo[2]['$t'];
	  	obj['description'] = data.data.petfinder.pet.description['$t']	
  	}
  	return $http({
  		method: 'POST',
  		url: '/database',
  		data: obj
  	})
  	.then(function(resp) {
  		console.log('done')
  	})
  }

  $scope.redirectToResults = function() {

  }

});

//description = obj.petfinder.pet.description['$t']
//name = obj.petfinder.pet.name['$t']
//picture = obj.petfinder.pet.media.photos.photo[0]['$t']