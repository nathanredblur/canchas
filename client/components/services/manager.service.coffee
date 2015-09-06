'use strict'

angular.module 'canchasApp'
.factory 'Manager', ($resource) ->
  $resource '/api/managers/:id/:controller',
    id: '@_id'