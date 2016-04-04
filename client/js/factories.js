var factories = angular.module('myApp.factories', []);
factories.factory('ContactFactory', ['$scope', '$rootScope', function($scope,$rootScope) {
    var f = {};

    f.getContacts = function() {
        return $rootScope.contactlist = [{
            name: 'Chase Brasfield',
            number: '205-601-XXXX',
            email: 'chase@gmail.com',
            id: 0
        }];
    }


}]);

// trying to make the resource thing work.... 
// factories.factory('ResourceFactory', ['$resource', function($resource) {
//     return $resource('http://localhost:3000/api/posts/:id');
// }]);

