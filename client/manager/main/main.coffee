'use strict'

angular.module 'canchasApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'main',
    url: '/'
    templateUrl: '/manager/main/main.html'
    controller: 'MainCtrl'
