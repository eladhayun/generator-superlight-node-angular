angular
.module('App')
.config(function ($urlRouterProvider) {

  $urlRouterProvider.otherwise('/first');

});
