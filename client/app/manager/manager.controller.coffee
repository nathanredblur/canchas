'use strict'

angular.module 'canchasApp'
.controller 'ManagerCtrl', ($scope, $http, Auth, Manager) ->

  $http.get '/api/managers'
  .success (managers) ->
    $scope.managers = managers

  $scope.delete = (manager) ->
    Manager.remove id: manager._id
    _.remove $scope.managers, manager