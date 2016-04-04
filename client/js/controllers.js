
var controllers = angular.module('myApp.controllers', []);

controllers.controller('WelcomeController', ['$scope', '$rootScope', '$routeParams', '$location', function($scope, $rootScope, $routeParams, $location) {

    $rootScope.contactlist = [{
        name: 'Chase Brasfield',
        number: '205-601-XXXX',
        email: 'chase@gmail.com',
        id: 0
    }];


    $scope.nameInput = '';
    $scope.numberInput = '';
    $scope.emailInput = '';
    $scope.id = '';


    $scope.save = function() {
        var contact = {
            name: $scope.nameInput,
            number: $scope.numberInput,
            email: $scope.emailInput,
            id: $scope.contactlist.length
        }
        $scope.contactlist.push(contact)
        console.log($scope.contactlist);
        $scope.nameInput = '';
        $scope.numberInput = '';
        $scope.emailInput = '';
        $scope.id = '';
    }


    $scope.detailedView = function(id) {
        console.log(id);
        $location.path("/" + id);
    }


}]);

controllers.controller('DetailViewController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
    
    var postId = $routeParams.id;


    $scope.contact = $rootScope.contactlist[postId];
    console.log($scope.contactlist);
    
    
}]);



