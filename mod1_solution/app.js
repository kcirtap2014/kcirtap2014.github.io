(function(){
    'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
    $scope.message = "";
    $scope.input="";    
    $scope.checkIt = function(){   
        console.log($scope.input.split(',').length)
        if ($scope.input.trim() == "")
            $scope.message = "Please enter data first";
        else if ($scope.input.split(',').length<4) 
            $scope.message  = "Enjoy!";
        else if ($scope.input.split(',').length>=4) 
            $scope.message  = "Too much!";  
    }
    
}

})();