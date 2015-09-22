'use strict';

angular.module('workspace', ['ngAnimate', 'ngTouch', 'ngSanitize','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/fila-trabalho', {
        templateUrl: 'partials/fila-trabalho.html',
        controller: 'FilaTrabalhoCtrl'
      })
      .otherwise({
        redirectTo: '/fila-trabalho'
      });
  })
;
