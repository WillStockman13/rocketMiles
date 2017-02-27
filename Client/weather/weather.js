angular.module('weather')

.controller('weatherController', function ($scope, $http) {
   
  var init = () => {
  	var location = {x: 0, y: 0};
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      location.x = position.coords.latitude; 
      location.y = position.coords.longitude; 
      console.log('hello', $scope.data)
      return $http({
        method: 'POST',
        url: '/api/getWeather',
        data: JSON.stringify(location),
        contentType: 'application/json'
      })
      .then(function(resp) {
        for(var i = 0; i < resp.data.length; i++) {
          console.log(resp.data[i].icon)
          if(resp.data[i].icon.indexOf('rain') >= 0) {
            resp.data[i].pic = '../assets/rain.jpeg';
          }
          if(resp.data[i].icon.indexOf('snow') >= 0) {
            resp.data[i].pic = '../assets/snowflake.ico';
          }
          if(resp.data[i].icon.indexOf('sun') >= 0 || resp.data[i].icon.indexOf('clear-day') >= 0) {
            resp.data[i].pic = '../assets/sun.jpg';
          }
          if(resp.data[i].icon.indexOf('cloud') >= 0) {
            resp.data[i].pic = '../assets/cloud.png';
          }
        }
        document.getElementsByClassName('loading')[0].style.display = 'none'
        $scope.data = resp.data;
      })
    }
  }
  init()

});
