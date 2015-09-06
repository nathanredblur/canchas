'use strict'

angular.module 'canchasApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'manager',
    url: '/manager'
    templateUrl: 'app/manager/manager.html'
    controller: 'ManagerCtrl'
