angular
.module('SecondModule')
.config(function ($stateProvider) {

  $stateProvider

  .state('second', {
    url: '/second',
    templateUrl: 'views/second.html',
    controller: 'SecondCtrl'
  });

});
