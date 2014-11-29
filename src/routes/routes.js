gDay.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      url: "/",
      templateUrl: "templates/sessions/index.html"
    }) 
    .state('registrations', {
      url: "/registrations",
      templateUrl: "templates/registrations/index.html"
    })
}]);
