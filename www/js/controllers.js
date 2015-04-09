angular.module('myFlickrBrowser.controllers', ['ionic'])

.controller('photoController', function($scope, $http) {
    $scope.photoList = function() {
        $http.get("http://echo.jsontest.com/firstname/Hanna/lastname/Lupico", { params: { "key1": "value1", "key2": "value2" } })
            .success(function(data) {
                $scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }

    $scope.photoList();
    
 
});
