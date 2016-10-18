angular.module('pet')

.controller('DogsController', function ($scope, $http) {
  
  $scope.generateDogLike = function() {
    console.log('hello')
  	$scope.Like($scope.data);
    if($scope.url) {
      console.log('it works')
      return $http({
        method: 'POST',
        url: '/generate',
        data: $scope.url
      })
      .then(function(resp) {
        $scope.data = resp;
        $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
        $scope.name = resp.data.petfinder.pet.name['$t'];
      })
    } else {
      return $http({
        method: 'GET',
        url: '/generate'
      }) 
      .then(function(resp) {
        $scope.data = resp;
        $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
        $scope.name = resp.data.petfinder.pet.name['$t'];
      })
    }
  };
  
   $scope.generateDogDisLike = function() {
    if($scope.url) {
      return $http({
        method: 'POST',
        url: '/generate',
        data: $scope.url
      })
      .then(function(resp) {
        $scope.data = resp;
        $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
        $scope.name = resp.data.petfinder.pet.name['$t'];
      })
    } else {
      return $http({
      	method: 'GET',
      	url: '/generate'
      }) 
      .then(function(resp) {
        $scope.data = resp;
        $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
        $scope.name = resp.data.petfinder.pet.name['$t'];
      })
    }
  };

  $scope.refineSearch = function(obj) {
    console.log(obj)
    $scope.url = obj;
    return $http({
      method: 'POST',
      url: '/generate',
      data: obj
    })
    .then(function(resp) {
      $scope.data = resp;
      $scope.pic = resp.data.petfinder.pet.media.photos.photo[2]['$t'];
      $scope.name = resp.data.petfinder.pet.name['$t'];
    })
  }

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

});

//description = obj.petfinder.pet.description['$t']
//name = obj.petfinder.pet.name['$t']
//picture = obj.petfinder.pet.media.photos.photo[0]['$t']