gDay.controller("RegistrationsController", ["$scope", function($scope) {
    
    $scope.sessions = [
        {
          id: 1,
          
          titile: 'Angular',
          description: 'AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC',
          image: 'angular.jpeg'
        },
        
        {
          id: 2,
          
          titile: 'Android',
          description: 'Android is a mobile operating system (OS) based on the Linux kernel and currently developed by Google. With a user interface based on direct manipulation',
          image: 'android.jpeg'
        },
        
        {
          id: 3,
          titile: 'Google',
          description: 'A map is a symbolic depiction highlighting relationships between elements of some space, such as objects, regions, and themes. Many maps are static ..',
          image: 'googlemap.jpeg'
        }
    ]    
}]);
