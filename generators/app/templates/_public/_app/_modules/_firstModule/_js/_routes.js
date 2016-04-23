angular
.module('FirstModule')
.config(function ($stateProvider) {

  $stateProvider

  .state('first', {
    url: '/first',
    templateUrl: 'views/first.html',
    controller: 'FirstCtrl'
  });

});
