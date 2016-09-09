(function(){
    'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
    $scope.message = "";
    $scope.input="";    
    $scope.customStyle = {};
    $scope.checkIt = function(){   
        console.log($scope.input.split(',').length)
        if ($scope.input.trim() == ""){
            $scope.message = "Please enter data first";
            $scope.customStyle.colorClass = "base";}
        else if ($scope.input.split(',').length<4) {
            $scope.message  = "Enjoy!";
            $scope.customStyle.colorClass = "enjoy";}
        else if ($scope.input.split(',').length>=4) {
            $scope.message  = "Too much!";  
            $scope.customStyle.colorClass = "toomuch";}
        console.log($scope.customStyle.colorClass)
    }
    
}

})();