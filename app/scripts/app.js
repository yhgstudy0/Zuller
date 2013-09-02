'use strict';


// Declare app level module which depends on filters, and services
angular.module('Zuller', ['Zuller.filters', 'Zuller.services', 'Zuller.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/login', { templateUrl: 'views/login.html', controller: 'LoginCtrl' })
      .when('/bars/:barId',{ templateUrl: 'views/detailed-bar.html', controller: 'DetailedBarCtrl'})
      .when('/parties/:partyId',{ templateUrl: 'views/detailed-party.html', controller: 'DetailedPartyCtrl'})
	  .otherwise({ redirectTo: '/'});
  }]);



