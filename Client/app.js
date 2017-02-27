angular.module('weather', ['ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/weather', {
      templateUrl: 'weather/weather.html',
      controller: 'weatherController'
    })

    .otherwise({
      redirectTo: '/weather'
    });

})