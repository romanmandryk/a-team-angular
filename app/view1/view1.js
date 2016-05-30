'use strict';

angular.module('myApp.view1', ['ngRoute'])


.controller('View1Ctrl', function($scope) {
  $scope.filters = {
    search: ''
  };
  $scope.team = [
    {
      name: 'Sean',
      url:'sean.png'
    },{
      name: 'Yaw',
      url:'yaw.png'
    },{
      name: 'Lucy',
      url:'lucy.png'
    },{
      name: 'Eric',
      url:'eric.png'
    },{
      name: 'Rory',
      url:'rory.png'
    },{
      name: 'Hayley',
      url:'hayley.png'
    }
  ];


});